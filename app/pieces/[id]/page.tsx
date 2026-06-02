import Piece from "@/components/piece";
import { api } from "@/lib/api";

export default async function PiecePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [concerts, piece] = await Promise.all([
    api.pieces.concerts({ path: { id: parseInt(id) } }),
    api.pieces.getById({ id: parseInt(id) }),
  ]);

  return <Piece piece={piece} concerts={concerts} />;
}
