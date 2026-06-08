import { format } from "date-fns";
import type { components } from "./../lib/schema";
import { is } from "date-fns/locale";
import Link from "next/link";

type ConcertDto = components["schemas"]["ConcertDto"];

export default function Concert({ concert }: { concert: ConcertDto }) {
  return (
    <div className="flex flex-col gap-5">
      <h2>{concert.description}</h2>
      <p>Dagsetning tónleika: {format(concert.date, "PPP", { locale: is })}</p>
      <h4 className="">Efnisskrá:</h4>
      <div className="flex flex-col gap-10">
        {concert.piecesInConcert.map((pieceInConcert, idx) => (
          <div key={`piece-in-concert-${idx}`} className="ml-5">
            <Link href={`/pieces/${pieceInConcert.piece.id}`} className="mb-2 font-semibold">
              {pieceInConcert.piece.title} -{" "}
              <span className="italic">
                {pieceInConcert.piece.composer.name}
              </span>
            </Link>

            <p className="font-semibold">{pieceInConcert.groupName}</p>
            {pieceInConcert.performers.map((performer, idx) => (
              <div key={`performers-${idx}`}>
                <Link href={`/performers/${performer.id}`}>
                  <p>
                    {performer.name}
                    {", "}
                    <span className="italic">{performer.instrument}</span>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
