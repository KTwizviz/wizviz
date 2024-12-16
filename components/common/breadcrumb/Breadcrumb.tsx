import { Breadcrumb, BreadcrumbList } from "@/components/ui/index";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BreadcrumbSegment from "./BreadCrumbSegment";

const BreadCrumb = () => {
  const pathName = usePathname();
  const [pathSegments, setPathSegments] = useState<string[]>([]);

  // 경로가 바뀌었을 때, 해당 경로를 상태로 저장
  useEffect(() => {
    const splitPath = (): string[] => {
      if (!pathName) return [];
      return pathName.split('/').filter((segment) => segment);
    }
    setPathSegments(splitPath);
  }, [pathName])

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
    <Breadcrumb>
      <BreadcrumbList>
        {generateBreadcrumbItems()}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumb
