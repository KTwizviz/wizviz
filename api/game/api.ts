const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

export const fetchBoxscore = async (gameDate?: number, gmkey?: string) => {
  try {
    const queryparams =
      gameDate && gmkey ? `?gameDate=${gameDate}&gmkey=${gmkey}` : "";

    const URL = `${BASE_URL}/game/boxscore${queryparams}`;

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API 요청 에러:", error);
    throw error;
  }
};
