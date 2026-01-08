import { components } from "@/lib/schema";

type ComposerDto = components["schemas"]["StandAloneComposerDto"];

export default function Composer({ composer }: { composer: ComposerDto }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-semibold">{composer.name}</h2>
      <div>
        {composer.pieces.map((piece) => (
          <div key={`piece-${piece.id}`} className="flex flex-col gap-5">
            <p>{piece.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
