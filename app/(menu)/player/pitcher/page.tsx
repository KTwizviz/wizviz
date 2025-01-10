import { getPitcherList } from "@/api/player/apis";
import PitcherList from "@/components/player/pitcher-list";

export default async function page() {
  const pitcherList = await getPitcherList();
  return (
    <>
      <PitcherList data={pitcherList} />
    </>
  );
}
