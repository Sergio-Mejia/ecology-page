import { Area, AreaChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { carbonFootprint, carbonFootprintCaption } from "@/data/carbonFootprint";
import { formatDecimal } from "@/lib/formatters";

/** LabelList entrega el valor ya renderizable, no siempre numérico. */
const formatValueLabel = (value: string | number | boolean | null | undefined) =>
  typeof value === "number" ? formatDecimal(value) : "";

/**
 * El SVG del diseño se dibuja en un viewBox de 600 y se muestra a 440 px, así
 * que todos sus trazos y textos quedan multiplicados por este factor.
 */
const SCALE = 440 / 600;

const chartConfig = {
  gtco2e: { label: "GtCO₂e", color: "var(--chart-1)" },
} satisfies ChartConfig;

export function CarbonFootprintChart() {
  return (
    <ChartContainer
      config={chartConfig}
      role="img"
      aria-label={carbonFootprintCaption.description}
      className="aspect-[600/300] w-full"
    >
      <AreaChart
        data={carbonFootprint}
        margin={{ top: 46, right: 29, bottom: 0, left: 0 }}
      >
        <CartesianGrid
          vertical={false}
          horizontalValues={[4, 4.5, 5.5]}
          stroke="var(--chart-grid)"
        />
        <XAxis
          type="number"
          dataKey="year"
          domain={[2009, 2019]}
          ticks={[2009, 2013, 2019]}
          tickFormatter={(year: number) => String(year)}
          height={37}
          tickLine={false}
          tickMargin={8}
          axisLine={{ stroke: "var(--chart-axis)" }}
          tick={{ fontSize: 12 * SCALE, fill: "var(--muted-foreground)" }}
        />
        <YAxis
          dataKey="gtco2e"
          domain={[3.5, 5.5]}
          ticks={[3.5, 4.5, 5.5]}
          tickFormatter={formatDecimal}
          tickLine={false}
          axisLine={false}
          width={44}
          tick={{ fontSize: 11 * SCALE, fill: "var(--chart-label)" }}
        />
        <Area
          type="linear"
          dataKey="gtco2e"
          stroke="var(--chart-1)"
          strokeWidth={3 * SCALE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="var(--chart-1)"
          fillOpacity={0.08}
          isAnimationActive={false}
          activeDot={false}
          dot={{
            r: 6 * SCALE,
            fill: "var(--card)",
            stroke: "var(--chart-1)",
            strokeWidth: 3 * SCALE,
          }}
        >
          <LabelList
            dataKey="gtco2e"
            position="top"
            offset={10}
            formatter={formatValueLabel}
            fontSize={13 * SCALE}
            fontWeight={600}
            fill="var(--foreground)"
          />
        </Area>
      </AreaChart>
    </ChartContainer>
  );
}
