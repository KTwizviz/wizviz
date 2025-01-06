import { CoachResponse } from "./types";

// api/player/coachlist
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(BASE_URL);

export const getCoachList = async (): Promise<CoachInfo[]> => {
  const res = await fetch(`${BASE_URL}/player/coachlist`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch coach list");
  }

  const response: CoachResponse = await res.json();
  return response.data.list; // list 반환
};
