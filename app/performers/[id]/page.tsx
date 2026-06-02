import Performer from "@/components/performer";
import { api } from "@/lib/api";
import { components } from "@/lib/schema";

export default async function MusicianPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [performer, concerts] = await Promise.all([
    api.performers.getById({ id: parseInt(id) }),
    api.performers.concerts({ path: { id: parseInt(id) } }),
  ]);

  return <Performer performer={performer} concerts={concerts} />;
}
