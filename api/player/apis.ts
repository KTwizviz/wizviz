import { CoachResponse, PitcherResponse } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

// api/player/coachlist
export const getCoachList = async (): Promise<CoachInfo[]> => {
  const url = `${BASE_URL}/player/coachlist`;
  const res = await fetch(url, { method: "GET" });

  if (!res.ok) {
    throw new Error("Failed to fetch coach list");
  }

  const response: CoachResponse = await res.json();
  return response.data.list; // list 반환
};

// api/player/pitcherlist
export const getPitcherList = async (): Promise<PitcherInfo[]> => {
  const url = `${BASE_URL}/player/pitcherlist`;
  const res = await fetch(url, { method: "GET" });
  if (!res.ok) {
    throw new Error("Failed to fetch coach list");
  }

  const response: PitcherResponse = await res.json();
  return response;
};
