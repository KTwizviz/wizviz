import { CoachResponse } from "./types";

// api/player/coachlist
// const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

export const getCoachList = async (): Promise<CoachInfo[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/player/coachlist`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch coach list");
  }

  const response: CoachResponse = await res.json();
  return response.data.list; // list 반환
};
