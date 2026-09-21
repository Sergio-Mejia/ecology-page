import { Container } from "@/components/Container";
import { KpiCard } from "@/components/KpiCard";
import { kpis } from "@/data/kpis";

export function KpiGrid() {
  return (
    <section id="indicadores" className="pt-16 pb-16 desktop:pb-24">
      <Container>
        <div className="grid grid-cols-1 gap-kpi-gap tablet:grid-cols-2 desktop:grid-cols-4">
          {kpis.map((kpi) => (
            <KpiCard
              key={kpi.id}
              value={kpi.value}
              label={kpi.label}
              tone={kpi.tone}
              source={kpi.source}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
