import { ChartCard } from "@/components/ChartCard";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CarbonFootprintChart } from "@/components/charts/CarbonFootprintChart";
import {
  carbonFootprintCaption,
  carbonFootprintHeading,
  carbonFootprintProse,
} from "@/data/carbonFootprint";

export function HuellaAmbiental() {
  return (
    <section id="huella" className="bg-cream-100 py-16 desktop:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-9 desktop:grid-cols-[1.05fr_0.95fr] desktop:gap-14">
          <div>
            <SectionHeading heading={carbonFootprintHeading} className="mb-6" />
            <p className="text-body">{carbonFootprintProse}</p>
          </div>
          <ChartCard caption={carbonFootprintCaption}>
            <CarbonFootprintChart />
          </ChartCard>
        </div>
      </Container>
    </section>
  );
}
