import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui";
import Link from "next/link";

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
        <BreadcrumbLink className="text-ELSE-90">
          <Link href={href}>{segment}</Link>
        </BreadcrumbLink>
      )}
    </BreadcrumbItem>
    {!isLast && <BreadcrumbSeparator className="text-ELSE-90" />}
  </>
);

export default BreadcrumbSegment;