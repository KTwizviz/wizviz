import { useQuery } from "@tanstack/react-query";
import { fetchBoxscore } from "@/api/game/apis";
import { BOXSCORE } from "@/constants/query-keys";

export const useBoxscore = (gameDate?: number, gmkey?: string) => {
  return useQuery<GetBoxscore | undefined>({
    queryKey: [BOXSCORE, gameDate, gmkey],
    queryFn: () => fetchBoxscore(gameDate, gmkey),
  });
};
