import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import type { FigureTone } from "@/data/types";
import { cn } from "@/lib/utils";

const toneColors: Record<FigureTone, string> = {
  terracota: "var(--chart-1)",
  "olive-dark": "var(--chart-3)",
};

const toneText: Record<FigureTone, string> = {
  terracota: "text-terracota",
  "olive-dark": "text-olive-dark",
};

const chartConfig = {
  percent: { label: "Porcentaje" },
} satisfies ChartConfig;

interface GaugeChartProps {
  percent: number;
  display: string;
  tone: FigureTone;
  label: string;
}

export function GaugeChart({ percent, display, tone, label }: GaugeChartProps) {
  return (
    <div className="relative mx-auto size-40">
      <ChartContainer
        config={chartConfig}
        role="img"
        aria-label={`${display} ${label}`}
        className="aspect-square size-full"
      >
        <RadialBarChart
          data={[{ percent }]}
          innerRadius="78%"
          outerRadius="100%"
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            dataKey="percent"
            cornerRadius={999}
            fill={toneColors[tone]}
            background={{ fill: "var(--muted)" }}
            isAnimationActive={false}
          />
        </RadialBarChart>
      </ChartContainer>
      <p
        aria-hidden="true"
        className={cn(
          "absolute inset-0 flex items-center justify-center font-serif text-kpi-sm font-bold",
          toneText[tone],
        )}
      >
        {display}
      </p>
    </div>
  );
}
