import { Container } from "@/components/Container";
import { KpiCard } from "@/components/KpiCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import Mapa from "@/assets/Mapa_de_Colombia.svg";
import { colombiaHeading, colombiaProse, colombiaStats } from "@/data/colombia";

export function CasoColombia() {
  return (
    <section id="colombia" className="bg-cream-100 py-16 desktop:py-24">
      <Container>
        <SectionHeading heading={colombiaHeading} />
        <div className="grid grid-cols-1 items-start gap-9 desktop:grid-cols-[1.05fr_0.95fr] desktop:gap-14">
          <Card className="box-content flex min-h-map items-center justify-center rounded-2xl border-[1.5px] border-dashed border-olive-dark/28 bg-sand p-0 text-base shadow-card ring-0 transition duration-250 hover:-translate-y-1.25 hover:shadow-card-hover">
            <img
              src={Mapa}
              alt="Sistema de Parques Nacionales Naturales de Colombia — 59 PNN, más de 17 millones de hectáreas conservadas"
              className="h-full w-full rounded-2xl object-cover"
            />
          </Card>
          <p className="text-body">{colombiaProse}</p>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-4">
          {colombiaStats.map((stat) => (
            <KpiCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              tone={stat.tone}
              compact
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
