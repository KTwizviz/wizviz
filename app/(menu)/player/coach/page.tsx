import { getCoachList } from "@/api/player/apis";
import { CoachList } from "@/components/player/coach-list";
export const dynamic = "force-dynamic";
export default async function Page() {
  const coachList = await getCoachList();
  return (
    <>
      <CoachList data={coachList} />
    </>
  );
}
