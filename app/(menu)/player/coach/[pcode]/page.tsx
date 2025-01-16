import { getCoachDetail } from "@/api/player/apis";
import { CoachDetail } from "@/components/player/coach/coach-detail";

export default async function Page({
  params,
}: {
  params: {
    pcode: string;
  };
}) {
  const { pcode } = params;
  const data = await getCoachDetail(pcode);

  return (
    <>
      <CoachDetail data={data} />
    </>
  );
}
