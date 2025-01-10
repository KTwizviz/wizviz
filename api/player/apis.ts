import { CoachDetailResponse, CoachResponse, PitcherResponse } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

// player - 코치 리스트
export const getCoachList = async (): Promise<CoachInfo[]> => {
  const url = `${BASE_URL}/player/coach`;
  const res = await fetch(url, { method: "GET" });

  if (!res.ok) {
    throw new Error("Failed to fetch coach list");
  }

  const response: CoachResponse = await res.json();
  return response.data.list; // list 반환
};

// player - 투수 리스트
export const getPitcherList = async (): Promise<PitcherInfo[]> => {
  const url = `${BASE_URL}/player/pitcherlist`;
  const res = await fetch(url, { method: "GET" });
  if (!res.ok) {
    throw new Error("Failed to fetch coach list");
  }

  const response: PitcherResponse = await res.json();
  return response;
};

// player - 코치 디테일
export const getCoachDetail = async (
  pcode: string
): Promise<CoachDetailResponse["data"]> => {
  const queryparam = pcode ? `coachdetail?pcode=${pcode}` : "";
  const url = `${BASE_URL}/player/${queryparam}`;
  const response = await fetch(url, { method: "GET" });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.data;
};
