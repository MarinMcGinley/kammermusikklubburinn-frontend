import PaginationButtons from "@/components/pagination-buttons";
import { api } from "@/lib/api";
import { format } from "date-fns";
import { is } from "date-fns/locale";
import Link from "next/link";

export default async function Home(props: {
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
    <div className="h-full mx-15">
      <h2 className="text-2xl font-bold mb-4">Kæru meðlimir kammermúsíkklúbbsins,</h2>
      <p>Á þessari síðu getið þið séð sögu kammermúsíkklúbbsins. Byrjað var á þessu verkefni með það í huga að hafa góða yfirsýn yfir alla flytjendur sem komið hafa fram 
        með Kammermúsíkklúbbnum í gegnum tíðina og öll verkin sem þar hafa verið spiluð.
      Það getur vel verið að villur leynist í gögnunum hjá okkur og við hvetjum ykkur til að senda okkur 
      <Link className="text-blue-500 hover:underline" href="mailto:info@kammermusikklubburinn.is"> tölvupóst</Link> ef þið verðið vör við þær.</p>
    </div>
  );
}
