import {
  CoachDetailResponse,
  CoachResponse,
  PitcherDetailResponse,
  PitcherResponse,
} from "./types";

// player - 코치 리스트
export const getCoachList = async (): Promise<CoachInfo[]> => {
  const url = `/api/player/coachlist`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch coach list");
  }

  const response: CoachResponse = await res.json();
  return response.data.list; // list 반환
};

// player - 투수 리스트
export const getPitcherList = async (): Promise<PitcherInfo[]> => {
  const url = `/api/player/pitcherlist`;
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
  const url = `/api/player/${queryparam}`;
  const response = await fetch(url, { method: "GET" });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.data;
};

// player - 투수 디테일
export const getPitcherDetail = async (
  pcode: string
): Promise<PitcherDetailResponse["data"]> => {
  const queryparam = pcode ? `pitcherdetail?pcode=${pcode}` : "";
  const url = `${BASE_URL}/player/${queryparam}`;
  const response = await fetch(url, { method: "GET" });

  if (!response.ok) {
    throw new Error("투수의 디테일한 정보를 가져올수 없음");
  }

  const data = await response.json();
  return data.data;
};
