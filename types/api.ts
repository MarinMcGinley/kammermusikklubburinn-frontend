export interface Pagination<T> {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: T[];
}

export interface Concert {
  id: number;
  date: string;
  venue: string;
  concertSeasonId?: number;
  concertSeason?: ConcertSeason;
  pieces?: Piece[];
  performers?: Performer[];
}

export interface ConcertSeason {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  concerts?: Concert[];
}

export interface Composer {
  id: number;
  firstName: string;
  lastName: string;
  birthYear?: number;
  deathYear?: number;
  nationality?: string;
  pieces?: Piece[];
}

export interface Piece {
  id: number;
  title: string;
  composerId: number;
  composer?: Composer;
  yearComposed?: number;
  duration?: number;
  genre?: string;
  concerts?: Concert[];
}

export interface Performer {
  id: number;
  firstName: string;
  lastName: string;
  instrument?: string;
  biography?: string;
  concerts?: Concert[];
}
