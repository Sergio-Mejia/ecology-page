import { Card } from "@/components/ui/card";
import type { FigureTone } from "@/data/types";
import { cn } from "@/lib/utils";

const toneClasses: Record<FigureTone, string> = {
  terracota: "text-terracota",
  "olive-dark": "text-olive-dark",
};

interface KpiCardProps {
  value: string;
  label: string;
  tone: FigureTone;
  source?: string;
  compact?: boolean;
}

export function KpiCard({
  value,
  label,
  tone,
  source,
  compact = false,
}: KpiCardProps) {
  return (
    <Card
      className={cn(
        "gap-0 overflow-visible rounded-2xl bg-card text-base shadow-card ring-0 transition duration-250 hover:-translate-y-[5px] hover:shadow-card-hover",
        compact ? "px-5.5 py-6.5" : "px-6.5 py-8",
      )}
    >
      <p
        className={cn(
          "font-serif font-bold",
          compact ? "text-kpi-sm" : "text-kpi",
          toneClasses[tone],
        )}
      >
        {value}
      </p>
      <p className="mt-2.5 text-kpi-label text-muted-foreground">{label}</p>
      {source ? (
        <p className="mt-3 text-kpi-source text-subtle italic">{source}</p>
      ) : null}
    </Card>
  );
}
