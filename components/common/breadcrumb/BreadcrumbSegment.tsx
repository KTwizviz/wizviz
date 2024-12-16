import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui";

interface SegmentProps {
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
        <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
      )}
    </BreadcrumbItem>
    <BreadcrumbSeparator />
  </>
);

export default BreadcrumbSegment;