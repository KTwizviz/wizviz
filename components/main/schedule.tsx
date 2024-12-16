import Image from "next/image";
import MainSchdule from "@/assets/images/main_title_schedule.png";

const Schedule = () => {
  return (
    <div className="w-[1200px] justify-self-center">
      <Image
        src={MainSchdule}
        alt="main schdule"
        className="w-[826px] justify-self-center"
      />
      <div className="w-[1100px] mx-auto -mt-8 relative">
        <div className="flex justify-between gap-5 px-10 py-[50px] mb-20 bg-SYSTEM-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <div className="w-[605px] h-[222px] bg-SYSTEM-white text-SYSTEM-black border border-gray-100 rounded-lg flex items-center justify-center">
            schedule
          </div>
          <div className="w-[396px] h-[222px] bg-SYSTEM-white text-SYSTEM-black border border-gray-100 rounded-lg flex items-center justify-center">
            video
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
