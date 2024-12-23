import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui";

type SegmentProps = {
  segment: string;
  href: string;
  isLast: boolean;
}

const BreadcrumbSegment = ({ segment, href, isLast }: SegmentProps) => (
  <>
    <BreadcrumbItem>
      {isLast ? (
        <BreadcrumbPage>{segment}</BreadcrumbPage>
      ) : (
        <BreadcrumbLink href={href} className="text-ELSE-90">
          {segment}
        </BreadcrumbLink>
      )}
    </BreadcrumbItem>
    {!isLast && <BreadcrumbSeparator className="text-ELSE-90" />}
  </>
);

export default BreadcrumbSegment;