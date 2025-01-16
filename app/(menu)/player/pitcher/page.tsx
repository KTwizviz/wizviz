import { getPitcherList } from "@/api/player/apis";
import PitcherList from "@/components/player/pitcher/pitcher-list";
export const dynamic = "force-dynamic";
export default async function page() {
  const pitcherList = await getPitcherList();
  return (
    <>
      <PitcherList data={pitcherList} />
    </>
  );
}
