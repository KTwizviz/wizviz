export const PitcherStatsInfo = ({ data }: PitcherDetailProps) => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-SYSTEM-black">
          {data.gameplayer.playerName || "-"}
        </h1>
        <p className="text-xl text-ELSE-90 mt-2">
          {data.gameplayer.engName || "-"}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-SYSTEM-main/5 rounded-lg p-4">
          <p className="text-sm text-gray-600">연봉</p>
          <p className="text-lg font-semibold">
            {data.gameplayer.money || "-"}
          </p>
        </div>
        <div className="bg-SYSTEM-main/5 rounded-lg p-4">
          <p className="text-sm text-ELSE-49">순위</p>
          <p className="text-lg font-semibold">
            {data.gameplayer.rankName || "-"}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 border-t pt-4">
        <div>
          <p className="text-ELSE-49">신장</p>
          <p className="font-semibold">
            {data.gameplayer.height ? `${data.gameplayer.height}cm` : "-"}
          </p>
        </div>
        <div>
          <p className="text-ELSE-49">체중</p>
          <p className="font-semibold">
            {data.gameplayer.weight ? `${data.gameplayer.weight}kg` : "-"}
          </p>
        </div>
      </div>
    </>
  );
};
