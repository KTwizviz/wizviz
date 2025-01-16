const RankSkeleton = () => {
  return (
    <div className="w-[307px] flex text-SYSTEM-white">
      <div>
        <p className="font-extralight text-m opacity-80 mb-2">팀 순위</p>
        <div className="flex items-end text-xl pt-3 pr-5 border-r border-r-ELSE-">
          <div className="w-10 h-[60px] bg-gray-200 rounded mr-2 animate-pulse" />
          <p className="text-xl">위</p>
        </div>
      </div>
      <div className="content-end pl-5 mb-2">
        <div className="w-32 h-8 bg-gray-200 rounded mb-1 animate-pulse" />
        <div className="w-28 h-5 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default RankSkeleton;
