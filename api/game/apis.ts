const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

export async function getMonthSchedules(params: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/game/monthschedule?yearMonth=${params}`
    );

    if (!res.ok) {
      throw new Error("네트워크 문제 발생");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("API 요청 에러:", error);
  }
}

export async function getAllSchedules(params: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/game/allgameschedule?yearMonth=${params}`
    );

    if (!res.ok) {
      throw new Error("네트워크 문제 발생");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("API 요청 에러:", error);
  }
}

export const getBoxscore = async (queryparams: string): Promise<GetBoxscore> => {
  try {
    const URL = `${BASE_URL}/game/boxscore${queryparams}`;

    const response = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("API 요청 에러:", error);
    throw error;
  }
};
