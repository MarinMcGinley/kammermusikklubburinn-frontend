"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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
    } else if (
      count - Number(pageSize) * Number(pageIndex) <
      Number(pageSize)
    ) {
      setDisabledForward(true);
      params.set("PageIndex", String(Number(pageIndex) + 1));
    } else {
      params.set("PageIndex", String(Number(pageIndex) + 1));
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex justify-between">
      <button
        className="disabled:text-slate-200 disabled:border-slate-200 border p-1 rounded-xs"
        onClick={goBack}
        disabled={disabledBack}
      >
        Til baka
      </button>
      <button
        className="disabled:text-slate-200 disabled:border-slate-200 border p-1 rounded-xs"
        onClick={goForward}
        disabled={disabledForward}
      >
        Áfram
      </button>
    </div>
  );
}
