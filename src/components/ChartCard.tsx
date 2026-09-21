import { Card } from "@/components/ui/card";
import type { ChartCaption } from "@/data/types";
import { cn } from "@/lib/utils";

interface ChartCardProps {
  caption: ChartCaption;
  className?: string;
  children: React.ReactNode;
}

export function ChartCard({ caption, className, children }: ChartCardProps) {
  return (
    <Card
      className={cn(
        "gap-0 overflow-visible rounded-2xl px-7 py-8 text-base shadow-card ring-0 transition duration-250 hover:-translate-y-[5px] hover:shadow-card-hover",
        className,
      )}
    >
      <p className="mb-1.5 text-chart-title font-semibold tracking-chart-title text-muted-foreground uppercase">
        {caption.title}
      </p>
      <p className="mb-2 text-chart-sub text-subtle">{caption.subtitle}</p>
      {children}
    </Card>
  );
}
