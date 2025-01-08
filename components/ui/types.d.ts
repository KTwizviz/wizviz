type IconButtonProps = {
  icon: StaticImageData | LucideIcon;
  border?: boolean;
  circle?: boolean;
  iconSize?: number;
  text?: string;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
};

type CarouselImage = {
  img: StaticImageData;
  key: number;
};

type CarouselProps = {
  images: CarouselImage[];
};
