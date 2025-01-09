import AreaTitle from "./area-title";

const tableStyles = {
  th: "border py-2 font-normal",
  td: "border py-2 font-light",
};

const BatterRecord = ({
  team,
  batters,
}: {
  team: TeamKey;
  batters: Batter[];
}) => {
  return (
    <>
      <AreaTitle title={`${team} 타자 기록`} />
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className={tableStyles.th}>타순</th>
              <th className={tableStyles.th}>포지션</th>
              <th className={tableStyles.th}>이름</th>
              {[...Array(12)].map((_, i) => (
                <th key={i + 1} className="w-[50px] border py-2 font-normal">
                  {i + 1}
                </th>
              ))}
              <th className={tableStyles.th}>타수</th>
              <th className={tableStyles.th}>득점</th>
              <th className={tableStyles.th}>안타</th>
              <th className={tableStyles.th}>타점</th>
              <th className={tableStyles.th}>타율</th>
            </tr>
          </thead>
          <tbody>
            {batters.map((batter) => {
              const innings = Array(12)
                .fill("")
                .map((_, i) => batter[`inn${i + 1}` as keyof Batter] || "");

              // 타율 계산 (accmHit / accmAb)
              const battingAverage = batter.accmAb
                ? (batter.accmHit / batter.accmAb).toFixed(3)
                : "0.000";

              return (
                <tr key={batter.pcode}>
                  <td className={tableStyles.td}>{batter.oneturn}</td>
                  <td className="w-[60px] border py-2 font-light">
                    {batter.position}
                  </td>
                  <td className={tableStyles.td}>{batter.name}</td>
                  {innings.map((inn, i) => (
                    <td key={i} className={tableStyles.td}>
                      {inn}
                    </td>
                  ))}
                  <td className={tableStyles.td}>{batter.ab}</td>
                  <td className={tableStyles.td}>{batter.run}</td>
                  <td className={tableStyles.td}>{batter.hit}</td>
                  <td className={tableStyles.td}>{batter.rbi}</td>
                  <td className={tableStyles.td}>{battingAverage}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default BatterRecord;
