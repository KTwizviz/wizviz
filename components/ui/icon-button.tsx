import Image from "next/image";
import { twMerge } from "tailwind-merge";

const IconButton = ({
  icon: Icon,
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
        "p-2.5 rounded-md h-fit",
        circle && "rounded-full",
        border && "border",
        className
      )}
    >
      <div className="flex justify-self-center items-center">
        {"src" in Icon ? (
          <Image
            src={Icon}
            width={iconSize}
            height={iconSize}
            alt="icon"
            className="cursor-pointer"
          />
        ) : (
          <Icon size={iconSize} className="cursor-pointer" />
        )}
        {text && <span className="ml-2 text-m font-medium">{text}</span>}
      </div>
    </button>
  );
};

export default IconButton;
