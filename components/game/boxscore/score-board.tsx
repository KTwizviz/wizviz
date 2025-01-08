type ScoreBoardProps = {
  scoreboard: Scoreboard[] | undefined;
};

const ScoreBoard = ({ scoreboard }: ScoreBoardProps) => {
  const headers = Array.from({ length: 15 }, (_, i) => (i + 1).toString());
  const summaryHeaders = ["R", "H", "E", "B"];

  const ScoreBoardSkeleton = () => {
    return (
      <div className="w-[660px] overflow-x-auto">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 mb-2"></div>
          <div className="h-8 bg-gray-200 mb-2"></div>
          <div className="h-8 bg-gray-200"></div>
        </div>
      </div>
    );
  };

  if (!scoreboard) return <ScoreBoardSkeleton />;

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr>
            <th className="px-5 bg-red-600 font-normal text-white border border-gray-300">
              팀
            </th>
            {headers.map((header) => (
              <th
                key={header}
                className="px-3 py-2 bg-red-600 font-normal text-white border border-gray-300 w-8"
              >
                {header}
              </th>
            ))}
            {summaryHeaders.map((header) => (
              <th
                key={header}
                className="px-3 py-2 bg-red-600 font-normal text-white border border-gray-300 w-8"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((team, index) => {
            const inningScores = headers.map((h) => {
              const key = `score${h}` as keyof Scoreboard;
              return team[key];
            });

            return (
              <tr key={team.bhomeName} className={"bg-white"}>
                <td className="p-2 border border-gray-300 ">
                  {team.bhomeName}
                </td>
                {inningScores.map((score, i) => (
                  <td key={i} className="p-2 border border-gray-300">
                    {score}
                  </td>
                ))}
                <td className="p-2 border border-gray-300 text-red-600">
                  {team.run}
                </td>
                <td className="p-2 border border-gray-300">{team.hit}</td>
                <td className="p-2 border border-gray-300">{team.error}</td>
                <td className="p-2 border border-gray-300">{team.ballfour}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ScoreBoard;
