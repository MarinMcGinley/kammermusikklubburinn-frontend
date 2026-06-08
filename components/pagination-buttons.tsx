"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaginationButtons({
  count,
  pageSize,
}: {
  count: number;
  pageSize: number;
}) {
  const [disabledBack, setDisabledBack] = useState(true);
  const [disabledForward, setDisabledForward] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    if (!searchParams.get("PageIndex") || searchParams.get("PageIndex") === "1") {
      setDisabledBack(true);
      setDisabledForward(false);
    }
  }, [searchParams]);

  const goBack = () => {
    setDisabledForward(false);

    const params = new URLSearchParams(searchParams);
    const pageIndex = params.get("PageIndex");

    if (!pageIndex || Number(pageIndex) == 2) {
      setDisabledBack(true);
      params.set("PageIndex", "1");
    } else {
      params.set("PageIndex", String(Number(pageIndex) - 1));
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const goForward = () => {
    setDisabledBack(false);

    const params = new URLSearchParams(searchParams);
    const pageIndex = params.get("PageIndex");

    if (!pageIndex) {
      params.set("PageIndex", "2");
      if (count - Number(pageSize) * 2 <= Number(pageSize)) {
        setDisabledForward(true);
      }
    } else {
      params.set("PageIndex", String(Number(pageIndex) + 1));
      if (count - Number(pageSize) * (Number(pageIndex) + 1) <= Number(pageSize)) {
        setDisabledForward(true);
      }
    }

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex justify-between mb-4 mx-3">
      <button
        className="disabled:text-slate-200 disabled:border-slate-200 border py-1 px-2 rounded-xs"
        onClick={goBack}
        disabled={disabledBack}
      >
        Til baka
      </button>
      <button
        className="disabled:text-slate-200 disabled:border-slate-200 border py-1 px-2 rounded-xs"
        onClick={goForward}
        disabled={disabledForward}
      >
        Áfram
      </button>
    </div>
  );
}
