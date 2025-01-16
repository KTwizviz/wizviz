const ScheduleSkeleton = () => {
  return (
    <div className="w-[620px] h-[222px]">
      <div className="mt-3 mb-4 mx-5 pb-2 flex gap-11 border-b border-b-ELSE-DE items-center justify-center">
        <div className="w-96 justify-items-center">
          <div className="w-48 h-6 bg-gray-200 rounded mb-2 mx-auto animate-pulse" />
          <div className="w-32 h-4 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="justify-items-center w-[110px]">
          <div className="w-[110px] h-[95px] bg-gray-200 rounded animate-pulse mb-2" />
          <div className="w-16 h-5 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        <div className="w-64 place-self-center justify-items-center space-y-6">
          <div className="flex mt-3 gap-7 justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded animate-pulse" />
            <div className="w-4 h-16 bg-gray-200 rounded animate-pulse" />
            <div className="w-16 h-16 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="w-20 h-7 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        <div className="justify-items-center w-[110px]">
          <div className="w-[110px] h-[95px] bg-gray-200 rounded animate-pulse mb-2" />
          <div className="w-16 h-5 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ScheduleSkeleton;
