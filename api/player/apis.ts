import { CoachResponse } from "./types";

// api/player/coachlist
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(BASE_URL, "나 베이스유알엘");

export const getCoachList = async (): Promise<CoachInfo[]> => {
  const res = await fetch("http://54.180.228.165/api/player/coachlist", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch coach list");
  }

  const response: CoachResponse = await res.json();
  return response.data.list; // list 반환
};
