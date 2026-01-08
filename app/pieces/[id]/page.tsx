import Composer from "@/components/composer";
import { api } from "@/lib/api";

export default async function PiecePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const composer = await api.pieces.concerts({ path: { id: parseInt(id) } });

  //   return <Composer composer={composer} />;
  // TODO FINISH PIECES
  return <p>PIECES HERE</p>;
}
