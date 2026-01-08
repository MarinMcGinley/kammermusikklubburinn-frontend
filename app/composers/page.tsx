import PaginationButtons from "@/components/pagination-buttons";
import { api } from "@/lib/api";
import Link from "next/link";

export default async function ComposersPage(props: {
  searchParams?: Promise<{
    PageIndex?: string;
    PageSize?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const pageIndex = Number(searchParams?.PageIndex) || 1;
  const pageSize = Number(searchParams?.PageSize) || 35;

  const { data: composers, count } = await api.composers.getAll({
    PageIndex: pageIndex,
    PageSize: pageSize,
  });

  return (
    <div className="h-full overflow-auto flex flex-col justify-between">
      <div>
        {composers.map((composer) => (
          <p key={composer.id}>
            <Link href={`/composers/${composer.id}`}>{composer.name}</Link>
          </p>
        ))}
      </div>
      <PaginationButtons count={count} pageSize={pageSize} />
    </div>
  );
}
