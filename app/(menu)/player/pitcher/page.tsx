import PitcherList from "@/components/player/pitcher-list";
export const dynamic = "force-dynamic";
export default function page() {
  return (
    <div>
      {/* @ts-expect-error - Async Server Component need to be supported */}
      <PitcherList />
    </div>
  );
}
