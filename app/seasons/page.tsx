import PaginationButtons from "@/components/pagination-buttons";
import { api } from "@/lib/api";
import { format } from "date-fns";
import { is } from "date-fns/locale";
import Link from "next/link";

export default async function Seasons(props: {
  searchParams?: Promise<{
    PageIndex?: string;
    PageSize?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const pageIndex = Number(searchParams?.PageIndex) || 1;
  const pageSize = Number(searchParams?.PageSize) || 35;

  const { data: seasons, count } = await api.concertSeasons.getAll({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
  return (
    <div className="h-full overflow-auto flex flex-col justify-between">
      <div>
        {seasons.map((season) => (
          <div key={season.id}>
            <Link className="flex gap-5" href={`/seasons/${season.id}`}>
            <p>{season.title}</p>
            <span className="text-gray-500"> {format(season.beginDate, "MMM yyyy", { locale: is })} - {format(season.endDate, "MMM yyyy", { locale: is })}</span>
            </Link>
          </div>
        ))}
      </div>
      <PaginationButtons count={count} pageSize={pageSize} />
    </div>
  );
}
