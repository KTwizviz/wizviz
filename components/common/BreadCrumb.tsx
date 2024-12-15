import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from "@/components/ui/index";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BreadCrumb = () => {
  const pathName = usePathname();
  const [pathSegments, setPathSegments] = useState<string[]>([]);


  useEffect(() => {
    const splitPath = (): string[] => {
      if (!pathName) return [];
      return pathName.split('/').filter((segment) => segment);
    }
    setPathSegments(splitPath);
  }, [pathName])

  const generateBreadcrumbItems = () => {
    const items = [];

    // Home 링크 추가
    items.push(
      <BreadcrumbItem key="home">
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
    );

    // 첫 번째 항목이 아니면 구분자 추가
    if (pathSegments.length > 0) {
      items.push(<BreadcrumbSeparator key="separator-home" />);
    }

    // 나머지 경로에 대한 아이템 생성
    pathSegments.forEach((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const isLast = index === pathSegments.length - 1;

      items.push(
        <BreadcrumbItem key={segment}>
          {isLast ? (
            <BreadcrumbPage>{segment}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={href}>
              {segment}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      );

      // 마지막 항목이 아니면 구분자 추가
      if (!isLast) {
        items.push(<BreadcrumbSeparator key={`separator-${segment}`} />);
      }
    });

    return items;
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
