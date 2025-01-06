import { ParkingNotice } from "@/components/wizpark/parking/parking-notice";
import { ParkingInstructions } from "@/components/wizpark/parking/parking-instructions";

export default function page() {
  return (
    <div className="p-4">
      <ParkingNotice />
      <ParkingInstructions />
    </div>
  );
}
