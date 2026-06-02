import { components } from "@/lib/schema";
import Link from "next/link";

type ComposerDto = components["schemas"]["StandAloneComposerDto"];

export default function Composer({ composer }: { composer: ComposerDto }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-semibold">{composer.name}</h2>
      <div>
        {composer.pieces.map((piece) => (
          <div key={`piece-${piece.id}`} className="flex flex-col gap-5">
            <Link href={`/pieces/${piece.id}`}>{piece.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
