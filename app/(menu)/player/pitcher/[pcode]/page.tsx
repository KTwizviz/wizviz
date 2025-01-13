import { getPitcherDetail } from "@/api/player/apis";
import { PitcherDetail } from "@/components/player/pitcher/pitcher-detail";

export default async function Page({
  params,
}: {
  params: {
    pcode: string;
  };
}) {
  const { pcode } = params;
  const data = await getPitcherDetail(pcode);
  return (
    <>
      <PitcherDetail data={data} />
    </>
  );
}
