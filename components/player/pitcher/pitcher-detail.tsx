import { PitcherStatsInfo } from "./pitcher-stats-info";
import { PitcherHistory } from "./pitcher-history";
import { PitcherProfileImage } from "./pitcher-profile-image";

export const PitcherDetail = ({ data }: PitcherDetailProps) => {
  return (
    <div className="bg-SYSTEM-white rounded-lg shadow-lg overflow-hidden border">
      <div className="grid md:grid-cols-2">
        {/* 투수 프로필이미지 */}
        <PitcherProfileImage data={data} />
        {/* 투수 스탯 */}
        <div className="p-8 space-y-6">
          <PitcherStatsInfo data={data} />
          {/* 투수 경기이력 및 커리어 */}
          <PitcherHistory data={data} />
        </div>
      </div>
    </div>
  );
};

export default PitcherDetail;
