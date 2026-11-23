import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import {
  globalWasteBarColors,
  globalWasteCaption,
  globalWasteScenarios,
} from "@/data/globalWaste";
import { formatPrecise } from "@/lib/formatters";

/** LabelList entrega el valor ya renderizable, no siempre numérico. */
const formatTonnesLabel = (value: string | number | boolean | null | undefined) =>
  typeof value === "number" ? `${formatPrecise(value)} mil M t` : "";

const chartConfig = {
  tonnes: { label: "Miles de millones de toneladas" },
} satisfies ChartConfig;

export function GlobalWasteChart() {
  return (
    <ChartContainer
      config={chartConfig}
      role="img"
      aria-label={globalWasteCaption.description}
      className="aspect-[500/280] w-full"
    >
      <BarChart
        data={globalWasteScenarios}
        layout="vertical"
        barCategoryGap="28%"
        margin={{ top: 16, right: 96, bottom: 8, left: 0 }}
      >
        <XAxis type="number" hide domain={[0, 4]} />
        <YAxis
          type="category"
          dataKey="scenario"
          width={150}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
        />
        <Bar dataKey="tonnes" radius={8} isAnimationActive={false}>
          {globalWasteScenarios.map((point, index) => (
            <Cell key={point.id} fill={globalWasteBarColors[index]} />
          ))}
          <LabelList
            dataKey="tonnes"
            position="right"
            offset={10}
            formatter={formatTonnesLabel}
            fontSize={13}
            fontWeight={700}
            fill="var(--foreground)"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
