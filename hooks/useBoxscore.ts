import { useQuery } from "@tanstack/react-query";
import { getBoxscore } from "@/api/game/apis";
import { BOXSCORE } from "@/constants/query-keys";

export const useBoxscore = (gameDate?: number, gmkey?: string) => {
  const queryparams =
    gameDate && gmkey ? `?gameDate=${gameDate}&gmkey=${gmkey}` : "";
  return useQuery<GetBoxscore | undefined>({
    queryKey: [BOXSCORE, gameDate, gmkey],
    queryFn: () => getBoxscore(queryparams),
  });
};
