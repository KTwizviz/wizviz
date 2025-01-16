export const PitcherHistory = ({ data }: PitcherDetailProps) => {
  return (
    <>
      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-4">최근 경기 기록</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-SYSTEM-main/5 rounded-lg p-4 text-center">
            <p className="text-sm text-ELSE-49">볼넷</p>
            <p className="text-2xl font-bold text-SYSTEM-main">
              {data.seasonsummary.bb || "0"}
            </p>
          </div>
          <div className="bg-SYSTEM-main/5 rounded-lg p-4 text-center">
            <p className="text-sm text-ELSE-49">삼진</p>
            <p className="text-2xl font-bold text-SYSTEM-main">
              {data.seasonsummary.kk || "0"}
            </p>
          </div>
        </div>
      </div>

      {/* Career */}
      <div className="border-t pt-4">
        <p className="text-ELSE-49">커리어</p>
        <p className="text-sm text-ELSE-49 mt-1">
          {data.gameplayer.career || "-"}
        </p>
      </div>
    </>
  );
};
