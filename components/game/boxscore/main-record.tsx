import { Card, CardContent } from "@/components/ui";
import AreaTitle from "./area-title";

const MainRecord = ({ etcgames }: { etcgames: MainRecords[] }) => {
  return (
    <>
      <AreaTitle title="주요 기록" />
      <Card className="pt-6">
        <CardContent>
          <ul className="space-y-4">
            {etcgames.map((item) => (
              <li>
                <span className="bg-ELSE-DE text-ELSE-49 rounded-md px-2 py-0.5 mr-2">
                  {item.how}
                </span>
                {item.result}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
export default MainRecord;
