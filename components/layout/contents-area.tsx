import { ReactNode } from "react";

const ContentsArea = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1100px] h-auto pt-10 pb-[100px]">
        {children}
      </div>
    </div>
  )
}

export default ContentsArea;
