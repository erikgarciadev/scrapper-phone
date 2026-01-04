import {
  parse,
  format,
  getMonth,
  startOfMonth,
  endOfMonth,
  isSameDay as isSameDayFns,
  endOfDay as endOfDayFns,
} from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { es } from "date-fns/locale";
import { FILTER_MONTH } from "./constants";
import { FormatOptionsMonthDates } from "./types";

//Teleticket,PlazaNorte 31 de diciembre 2023
const parseDateSpanish = (date: string, format = "dd MMMM yyyy") => {
  const cleanDate = date
    .replace(/\bsetiembre\b/gi, "septiembre")
    .trim()
    .replace(/ de /g, " ");

  const parseDate = parse(cleanDate, format, new Date(), {
    locale: es,
  });

  return parseDate;
};

//Vaope viernes 30 ago. - 06:00pm
//  24/08/2025 • 6:00 PM
const parseDateWithTime = (date: string) => {
  const hasLongMonth =
    /enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre/i.test(
      date
    );
  const hasShortMonth =
    /\b(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)\b\./i.test(date);

  const format = hasLongMonth
    ? "EEEE dd MMMM. - hh:mma"
    : "EEEE dd MMM. - hh:mma";

  const parseDate = parse(date, "dd/MM/yyyy hh:mm a", new Date(), {
    locale: es,
  });

  return parseDate;
};

//Joinnus 2024-09-04 21:00:00
const parseDateNumberWithTime = (date: string) => {
  const parseDate = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());

  return parseDate;
};

const formatDate = (date: Date | string, _format: string) => {
  return format(date, _format, {
    locale: es,
  });
};

const isDateInMonth = (date: Date, month = FILTER_MONTH) => {
  return getMonth(date) === month - 1;
};

const isSameDay = (startDate: Date, endDate: Date) => {
  return isSameDayFns(startDate, endDate);
};

const getMonthDates = (
  month: number,
  formatOptions?: FormatOptionsMonthDates
) => {
  const year = new Date().getFullYear();

  const dateStart = startOfMonth(new Date(year, month - 1));
  const dateEnd = endOfMonth(new Date(year, month - 1));

  const formattedDateStart = format(
    dateStart,
    formatOptions?.dateStart ?? "yyyy-MM-dd'T'HH:mm:ss"
  );
  const formattedDateEnd = format(
    dateEnd,
    formatOptions?.dateEnd ?? "yyyy-MM-dd'T'23:59:59'"
  );

  return {
    dateStart: formattedDateStart,
    dateEnd: formattedDateEnd,
  };
};

const endOfDay = (date: Date | string) => {
  return endOfDayFns(date);
};

const parseTimeZone = (date: Date | string, timezone: string) => {
  return toZonedTime(date, timezone);
};

export const date = {
  parseDateSpanish,
  formatDate,
  parseDateWithTime,
  parseDateNumberWithTime,
  isDateInMonth,
  isSameDay,
  getMonthDates,
  endOfDay,
  parseTimeZone,
};
