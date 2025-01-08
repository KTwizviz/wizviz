import AreaTitle from "./area-title";

const tableStyles = {
  th: "border py-2 font-normal",
  td: "w-14 border py-2 font-light",
};

const PitcherRecord = ({
  team,
  pitchers,
}: {
  team: TeamKey;
  pitchers: Pitcher[];
}) => {
  return (
    <>
      <AreaTitle title={`${team} 투수 기록`} />
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className={tableStyles.th}>선수명</th>
              <th className={tableStyles.th}>등판</th>
              <th className={tableStyles.th}>결과</th>
              <th className={tableStyles.th}>승</th>
              <th className={tableStyles.th}>패</th>
              <th className={tableStyles.th}>세</th>
              <th className={tableStyles.th}>이닝</th>
              <th className={tableStyles.th}>타자</th>
              <th className={tableStyles.th}>투구수</th>
              <th className={tableStyles.th}>타수</th>
              <th className={tableStyles.th}>피안타</th>
              <th className={tableStyles.th}>피홈런</th>
              <th className={tableStyles.th}>사구</th>
              <th className={tableStyles.th}>삼진</th>
              <th className={tableStyles.th}>실점</th>
              <th className={tableStyles.th}>자책</th>
              <th className={tableStyles.th}>평균 자책점</th>
            </tr>
          </thead>
          <tbody>
            {pitchers.map((pitcher) => {
              // 평균 자책점 계산
              const era = pitcher.accmInn2
                ? ((pitcher.accmEr * 9) / (pitcher.accmInn2 / 3)).toFixed(2)
                : "0.00";

              return (
                <tr key={pitcher.pcode}>
                  <td className="w-24 border py-2 font-light">
                    {pitcher.name}
                  </td>
                  <td className={tableStyles.td}>{pitcher.changeinn || "-"}</td>
                  <td className={tableStyles.td}>{pitcher.wls || "-"}</td>
                  <td className={tableStyles.td}>{pitcher.w}</td>
                  <td className={tableStyles.td}>{pitcher.l}</td>
                  <td className={tableStyles.td}>{pitcher.s}</td>
                  <td className={tableStyles.td}>{pitcher.inn}</td>
                  <td className={tableStyles.td}>{pitcher.bf}</td>
                  <td className={tableStyles.td}>{pitcher.pa}</td>
                  <td className={tableStyles.td}>{pitcher.ab}</td>
                  <td className={tableStyles.td}>{pitcher.hit}</td>
                  <td className={tableStyles.td}>{pitcher.hr}</td>
                  <td className={tableStyles.td}>{pitcher.bbhp}</td>
                  <td className={tableStyles.td}>{pitcher.kk}</td>
                  <td className={tableStyles.td}>{pitcher.r}</td>
                  <td className={tableStyles.td}>{pitcher.er}</td>
                  <td className="w-24 border py-2 font-light">{era}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default PitcherRecord;
