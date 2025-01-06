import { CoachList } from "@/components/player/coach-list";

export default async function Page() {
  return (
    <>
      {/* @ts-expect-error - Async Server Component need to be supported */}
      <CoachList />
    </>
  );
}
