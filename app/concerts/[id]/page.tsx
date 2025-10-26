import Concert from "@/components/concert";
import { api } from "@/lib/api";

export default async function ConcertPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const concert = await api.concerts.getById({ id: parseInt(id) });

  return <Concert concert={concert} />;
}
