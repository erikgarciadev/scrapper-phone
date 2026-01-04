export type FormatOptionsMonthDates = {
  dateStart: string;
  dateEnd: string;
};

export type Event = {
  href: string | null;
  imgSrc: string;
  title: string | null;
  location: string;
  startDate: string | null;
  endDate: string | null;
  origin: string;
  slug: string;
  textDate: string | null;
  startDateTime: number;
  endDateTime: number | null;
};

export type EventFb = {
  id: string;
  href?: string | null;
  imgSrc: string;
  title: string;
  location: string;
  textDate: string;
  startDateTime: number;
  endDateTime?: number | null;
  createdAt: Date;
  updatedAt?: Date | null;
  visible: boolean;
  origin: string;
};