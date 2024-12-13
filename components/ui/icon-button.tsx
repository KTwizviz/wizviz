import { Button } from "@/components/ui/index";
import Image, { StaticImageData } from "next/image";

function IconButton({
  icon,
  variant = "outline",
  circle,
  iconSize,
  text,
}: {
  icon: StaticImageData;
  variant?:
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | "link";
  circle?: boolean;
  iconSize?: number;
  text?: string;
}) {
  // console.log("variant : ", variant);
  return (
    <Button
      size={text ? undefined : "icon"}
      className={circle ? "rounded-full" : ""}
      variant={circle ? "ghost" : "outline"}
      // variant={variant}
    >
      <div className="flex justify-self-center items-center">
        {/* <Image src={icon} alt="icon" height={iconSize ?? "17"} /> */}
        <Image src={icon} alt="icon" height={circle ? undefined : "17"} />
        {text && <span className="w-full ml-2">{text}</span>}
      </div>
    </Button>
  );
}

export default IconButton;
