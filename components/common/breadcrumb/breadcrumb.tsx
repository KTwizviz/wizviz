'use client'

import { Breadcrumb, BreadcrumbList } from "@/components/ui";
import { usePathname } from "next/navigation";
import BreadcrumbSegment from "./breadcrumb-segment";

const BreadCrumb = () => {
  const pathName: string = usePathname();
  const pathSegments: string[] = pathName.split('/').filter((segment) => segment);


  // 경로별 Breadcurmb 아이템 생성
  const generateBreadcrumbItems = () => {
    const buildSegments = pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join('/')}`; // 경로별 URL
      const isLast = index === pathSegments.length - 1;
      return (
        <BreadcrumbSegment
          key={segment}
          segment={segment}
          href={href}
          isLast={isLast}
        />
      );
    }).filter(Boolean);

    return [
      <BreadcrumbSegment
        key="home"
        segment="Home"
        href="/"
        isLast={pathSegments.length === 0}
      />,
      ...buildSegments
    ].filter(Boolean);
  };

  return (
    <div className="w-full h-[48px] flex justify-end items-center border-b-2 my-10">
      <Breadcrumb>
        <BreadcrumbList>
          {generateBreadcrumbItems()}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumb
