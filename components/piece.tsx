import { components } from "@/lib/schema";
import Link from "next/link";
import Concert from "./concert";
import { format } from "date-fns";
import { is } from "date-fns/locale";

type PieceDto = components["schemas"]["PieceDto"];
type PagedConcertsDto = components["schemas"]["PagedResultDtoOfConcertDto"];

export default function Piece({
  piece,
  concerts,
}: {
  piece: PieceDto;
  concerts: PagedConcertsDto;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="font-semibold">{piece.title}</h2>
        <Link href={`/composers/${piece.composer.id}`}>
          {piece.composer.name}
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        {concerts.data.map((concert) => (
          <div key={`concert-${concert.id}`} className="flex flex-col">
            <Link href={`/concerts/${concert.id}`} className="underline underline-offset-4">{concert.description}</Link>
            <p className="font-semibold">
              {
                concert.piecesInConcert.filter(
                  (p) => p.piece.id === piece.id
                )[0]?.groupName
              }
            </p>
            <Link href={`/concerts/${concert.id}`} className="italic mb-2">
              Dagsetning tónleika: {format(concert.date, "PPP", { locale: is })}
            </Link>
            {concert.piecesInConcert
              .filter((p) => p.piece.id === piece.id)[0]
              ?.performers.map((performer, idx) => (
                <Link key={`performer-${idx}`} href={`/performers/${performer.id}`}>
                  <p>
                    {performer.name}
                    {", "}
                    <span className="italic">{performer.instrument}</span>
                  </p>
                </Link>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
