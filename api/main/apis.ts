const BASE_URL = process.env.NEXT_PUBLIC_API_KEY;

export const getKtwizRank = async (): Promise<GetKtwizRank> => {
  try {
    const URL = `${BASE_URL}/game/ktwizteamrank`;

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.data.ktWizTeamRank;
  } catch (error) {
    console.error("API 요청 에러:", error);
    throw error;
  }
};
