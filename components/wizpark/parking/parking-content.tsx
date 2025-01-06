export const ParkingContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <p className="w-1 h-4 bg-ELSE-F87"></p>
        <p className="text-lg">{title}</p>
      </div>
      <p className="pb-5 pt-2 pl-2 font-light whitespace-pre-line">{content}</p>
    </div>
  );
};
