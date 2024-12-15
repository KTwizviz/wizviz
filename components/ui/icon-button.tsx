import Image from "next/image";
import { twMerge } from "tailwind-merge";

const IconButton = ({
  iconImage,
  border,
  circle,
  iconSize,
  text,
  onClick,
  className,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "p-2.5 rounded-md",
        circle && "rounded-full",
        border && "border",
        className
      )}
    >
      <div className="flex justify-self-center items-center">
        <Image
          src={iconImage}
          width={iconSize}
          height={iconSize}
          alt="icon"
          className="cursor-pointer"
        />
        {text && <span className="w-full ml-2">{text}</span>}
      </div>
    </button>
  );
};

export default IconButton;
