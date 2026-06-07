import Season from "@/components/season";
import { api } from "@/lib/api";

export default async function SeasonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const season = await api.concertSeasons.getById({ id: parseInt(id) });
  const concerts = await api.concertSeasons.concerts({
    path: { id: parseInt(id) },
  });

  return <Season season={season} concerts={concerts.data} />;
}
