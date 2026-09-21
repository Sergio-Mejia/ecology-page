import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { wasteBarColors, wasteCaption, wastePerTourist } from "@/data/wastePerTourist";
import { formatLitres } from "@/lib/formatters";

/** LabelList entrega el valor ya renderizable, no siempre numérico. */
const formatLitresLabel = (value: string | number | boolean | null | undefined) =>
  typeof value === "number" ? formatLitres(value) : "";

/**
 * El SVG del diseño se dibuja en un viewBox de 500 y se muestra a 440 px, así
 * que todos sus trazos y textos quedan multiplicados por este factor.
 */
const SCALE = 440 / 500;

const chartConfig = {
  litres: { label: "Litros por día" },
} satisfies ChartConfig;

export function WastePerTouristChart() {
  return (
    <ChartContainer
      config={chartConfig}
      role="img"
      aria-label={wasteCaption.description}
      className="aspect-[500/260] w-full"
    >
      <BarChart
        data={wastePerTourist}
        barCategoryGap="18.7%"
        margin={{ top: 48, right: 26, bottom: 0, left: 35 }}
      >
        <XAxis
          dataKey="accommodation"
          height={39}
          tickLine={false}
          tickMargin={8}
          axisLine={{ stroke: "var(--chart-axis)" }}
          tick={{ fontSize: 12 * SCALE, fill: "var(--muted-foreground)" }}
        />
        <YAxis hide domain={[0, 4.5]} />
        <Bar dataKey="litres" radius={10 * SCALE} isAnimationActive={false}>
          {wastePerTourist.map((point, index) => (
            <Cell key={point.id} fill={wasteBarColors[index]} />
          ))}
          <LabelList
            dataKey="litres"
            position="top"
            offset={8}
            formatter={formatLitresLabel}
            fontSize={14 * SCALE}
            fontWeight={700}
            fill="var(--foreground)"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
