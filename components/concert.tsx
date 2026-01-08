import { format } from "date-fns";
import type { components } from "./../lib/schema";
import { is } from "date-fns/locale";

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
            <h4 className="mb-2">
              {pieceInConcert.piece.title} -{" "}
              <span className="italic">
                {pieceInConcert.piece.composer.name}
              </span>
            </h4>

            <p className="font-semibold">{pieceInConcert.groupName}</p>
            {pieceInConcert.performers.map((performer, idx) => (
              <div key={`performers-${idx}`}>
                <p>
                  {performer.name}
                  {", "}
                  <span className="italic">{performer.instrument}</span>
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
