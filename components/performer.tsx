import { components } from "@/lib/schema";
import { format } from "date-fns";
import { is } from "date-fns/locale";
import Link from "next/link";

type PerformerDto = components["schemas"]["PerformerDto"];
type PagedConcertsDto = components["schemas"]["PagedResultDtoOfConcertDto"];

export default function Performer({
  performer,
  concerts,
}: {
  performer: PerformerDto;
  concerts: PagedConcertsDto;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-semibold">{performer.name}</h2>
      <div className="flex flex-col gap-5">
        {concerts.data.map((concert) => (
          <div key={`concert-${concert.id}`}>
              <Link href={`/concerts/${concert.id}`} className="underline underline-offset-4">{concert.description}</Link>
              <p>
                Dagsetning tónleika:{" "}
                {format(concert.date, "PPP", { locale: is })}
              </p>
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

                    <p className="italic">{pieceInConcert.groupName}</p>
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
        ))}
      </div>
    </div>
  );
}
