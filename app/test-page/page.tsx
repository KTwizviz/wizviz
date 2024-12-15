"use client";

import IconButton from "@/components/ui/icon-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import instagram from "@/assets/icons/icon_instagram.png";

const page = () => {
  const handleClick = () => {
    console.log("button click!");
  };
  return (
    <div className="p-4">
      <div className="text-lg font-bold">📌 test button</div>
      <div className="mt-2 flex gap-2">
        <IconButton
          icon={instagram}
          iconSize={18}
          border
          onClick={() => handleClick}
        />
        <IconButton
          icon={instagram}
          iconSize={18}
          text="insta"
          border
          onClick={() => handleClick}
        />
        <IconButton
          icon={ChevronLeft}
          border
          circle
          className="text-ELSE-DE bg-ELSE-7374"
          onClick={() => handleClick}
        />
        <IconButton
          icon={ChevronRight}
          border
          circle
          className="text-ELSE-DE bg-ELSE-7374"
          onClick={() => handleClick}
        />
        <IconButton
          icon={ChevronLeft}
          border
          circle
          className="text-ELSE-7374"
          onClick={() => handleClick}
        />
        <IconButton
          icon={ChevronRight}
          border
          circle
          className="text-ELSE-7374"
          onClick={() => handleClick}
        />
      </div>
    </div>
  );
};
export default page;
