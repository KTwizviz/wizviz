import { twMerge } from "tailwind-merge";

const AreaTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "mt-9 mb-4 border-l-4 border-SYSTEM-main text-2xl pl-4",
        className
      )}
    >
      {title}
    </div>
  );
};
export default AreaTitle;
