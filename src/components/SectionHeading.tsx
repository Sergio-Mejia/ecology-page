import type { SectionHeading as SectionHeadingData } from "@/data/types";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: SectionHeadingData;
  className?: string;
}

export function SectionHeading({ heading, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-section-head", className)}>
      <p className="mb-3.5 text-eyebrow text-olive-light uppercase">
        {heading.eyebrow}
      </p>
      <h2 className="text-section-title-sm font-bold text-olive-dark desktop:text-section-title">
        {heading.title}
      </h2>
    </div>
  );
}
