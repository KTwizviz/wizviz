import { getCoachList } from "@/api/player/apis";
import { CoachList } from "@/components/player/coach-list";

export default async function Page() {
  const coachList = await getCoachList();
  return (
    <>
      <CoachList data={coachList} />
    </>
  );
}
