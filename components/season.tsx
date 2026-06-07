import { components } from "@/lib/schema";
import Concert from "./concert";

type Season = components["schemas"]["ConcertSeasonDto"];
type ConcertDto = components["schemas"]["ConcertDto"];

export default function Season({ season, concerts }: { season: Season, concerts: ConcertDto[] }) {
  return (
    <div>
      <h2 className="font-bold">{season.title}</h2>
      <div className="flex flex-col gap-10">
      {concerts.map((concert) => (
        <Concert key={`concert-${concert.id}`} concert={concert} />
      ))}
    </div>
      </div>
  );
}
