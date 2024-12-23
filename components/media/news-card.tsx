import Image from "next/image";
import exampleImage from "@/assets/images/team_about_img3.png";
import { format } from "date-fns";
import { CalendarDays, Eye } from "lucide-react";

const NewsCard = ({ title, content, date, views }: NewsCardProps) => {
  return (
    <div className="h-[200px] flex p-4 gap-2 w-full border-b border-b-ELSE-B7">
      <div className="justify-center content-center w-[320px] h-[170px]">
        <Image src={exampleImage} width={300} height={160} alt="example" />
      </div>
      <div className="flex-1 h-[170px] flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold">[안내] {title}</p>
          <p className="line-clamp-3 text-l text-ELSE-7374">{content}</p>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <CalendarDays className="text-ELSE-7374 w-6 h-6" />
            <div className="text-ELSE-7374">{format(date, "yyyy.MM.dd")}</div>
          </div>
          <div className="flex gap-1">
            <Eye className="text-ELSE-7374 w-6 h-6" />
            <div className="text-ELSE-7374"> 조회수 : {views}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
