import { format, parse } from "date-fns";
import { ko } from "date-fns/locale";

export const formatGameDate = (date: string | number) => {
  const dateString = date.toString();
  const parsedDate = parse(dateString, "yyyyMMdd", new Date());
  return format(parsedDate, "yyyy년 M월 d일", { locale: ko });
};