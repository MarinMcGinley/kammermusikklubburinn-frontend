import Composer from "@/components/composer";
import { api } from "@/lib/api";

export default async function ComposerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const composer = await api.composers.getById({ id: parseInt(id) });

  return <Composer composer={composer} />;
}
