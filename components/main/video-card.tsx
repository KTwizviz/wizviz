const VideoCard = ({
  videoId,
  date,
  title,
  onClick,
}: {
  videoId: string;
  date: string;
  title: string;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <iframe
        src={`https://tv.naver.com/embed/${videoId}?autoplay=0&loop=0&mute=1`}
        width="250"
        height="140"
        allowFullScreen
        className="rounded-xl pointer-events-none"
      />
      <div className="my-4 flex justify-between items-center">
        <p className="px-2 py-1 rounded-full bg-gradient-to-r from-ELSE-F5 via-ELSE-CC6 to-ELSE-AB2 text-SYSTEM-white text-sm font-semibold">
          하이라이트
        </p>
        <p className="text-ELSE-90 text-m">{date}</p>
      </div>
      <p className="text-lg">{title}</p>
    </div>
  );
};
export default VideoCard;
