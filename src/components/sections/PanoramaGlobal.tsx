import { ChartCard } from "@/components/ChartCard";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { GaugeChart } from "@/components/charts/GaugeChart";
import { GlobalWasteChart } from "@/components/charts/GlobalWasteChart";
import { Card } from "@/components/ui/card";
import {
  globalWasteCaption,
  globalWasteGauges,
  globalWasteHeading,
  globalWasteProse,
  globalWasteSource,
} from "@/data/globalWaste";

export function PanoramaGlobal() {
  return (
    <section
      id="panorama"
      className="border-y border-border bg-card py-16 desktop:py-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-9 desktop:grid-cols-[0.95fr_1.05fr] desktop:gap-14">
          <div>
            <SectionHeading heading={globalWasteHeading} className="mb-6" />
            <p className="text-body">{globalWasteProse}</p>
          </div>
          <ChartCard caption={globalWasteCaption} className="bg-cream-100">
            <GlobalWasteChart />
          </ChartCard>
        </div>
        <ul className="mt-9 grid grid-cols-1 gap-5 tablet:grid-cols-3">
          {globalWasteGauges.map((gauge) => (
            <li key={gauge.id}>
              <Card className="h-full items-center gap-5 overflow-visible rounded-2xl bg-cream px-6 py-8 text-center text-base shadow-card ring-0 transition duration-250 hover:-translate-y-[5px] hover:shadow-card-hover">
                <GaugeChart
                  percent={gauge.percent}
                  display={gauge.display}
                  tone={gauge.tone}
                  label={gauge.label}
                />
                <p className="text-kpi-label text-muted-foreground">
                  {gauge.label}
                </p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-kpi-source text-subtle italic">
          {globalWasteSource}
        </p>
      </Container>
    </section>
  );
}
