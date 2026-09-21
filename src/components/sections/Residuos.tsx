import { ChartCard } from "@/components/ChartCard";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { WastePerTouristChart } from "@/components/charts/WastePerTouristChart";
import {
  wasteCaption,
  wasteChips,
  wasteHeading,
  wasteProse,
} from "@/data/wastePerTourist";

export function Residuos() {
  return (
    <section id="residuos" className="py-16 desktop:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-9 desktop:grid-cols-[1.05fr_0.95fr] desktop:gap-14">
          <div>
            <SectionHeading heading={wasteHeading} className="mb-6" />
            <p className="text-body">{wasteProse}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {wasteChips.map((chip) => (
                <p
                  key={chip.id}
                  className="box-content max-w-chip rounded-xl border border-olive-dark/14 bg-cream px-4.5 py-3 text-chip font-medium text-ink"
                >
                  {chip.text}
                </p>
              ))}
            </div>
          </div>
          <ChartCard caption={wasteCaption} className="bg-cream-100">
            <WastePerTouristChart />
          </ChartCard>
        </div>
      </Container>
    </section>
  );
}
