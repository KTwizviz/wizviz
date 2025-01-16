export const getKtwizRank = async (): Promise<GetKtwizRank> => {
  try {
    const response = await fetch("/api/game/ktwizteamrank");

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
