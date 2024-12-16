type IconButtonProps = {
  icon: StaticImageData | LucideIcon;
  border?: boolean;
  circle?: boolean;
  iconSize?: number;
  text?: string;
  className?: string;
  onClick: () => void;
};
