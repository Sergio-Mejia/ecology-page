import { Globe, MapPin, type LucideIcon } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import type { MilestoneScope } from "@/data/types";
import {
  milestones,
  regulationsHeading,
  regulationsIntro,
  scopeLabels,
} from "@/data/regulations";
import { cn } from "@/lib/utils";

const scopeIcons: Record<MilestoneScope, LucideIcon> = {
  colombia: MapPin,
  internacional: Globe,
};

const scopeBadge: Record<MilestoneScope, string> = {
  colombia: "bg-terracota/12 text-terracota",
  internacional: "bg-olive/12 text-olive-dark",
};

const scopeDot: Record<MilestoneScope, string> = {
  colombia: "bg-terracota",
  internacional: "bg-olive",
};

export function MarcoNormativo() {
  return (
    <section id="normativa" className="bg-cream-100 py-16 desktop:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 desktop:grid-cols-[0.8fr_1.2fr] desktop:gap-16">
          <div className="desktop:sticky desktop:top-anchor desktop:self-start">
            <SectionHeading heading={regulationsHeading} className="mb-6" />
            <p className="text-body">{regulationsIntro}</p>
            <ul className="mt-6 flex flex-wrap gap-3" aria-label="Leyenda">
              {(Object.keys(scopeLabels) as MilestoneScope[]).map((scope) => (
                <li
                  key={scope}
                  className="flex items-center gap-2 text-chip text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className={cn("size-2.5 rounded-full", scopeDot[scope])}
                  />
                  {scopeLabels[scope]}
                </li>
              ))}
            </ul>
          </div>

          <ol className="relative border-l-2 border-olive/25 pl-8 tablet:pl-10">
            {milestones.map((milestone) => {
              const Icon = scopeIcons[milestone.scope];

              return (
                <li key={milestone.id} className="relative pb-6 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-7 -left-[calc(--spacing(8)+7px)] size-3 rounded-full ring-4 ring-cream-100 tablet:-left-[calc(--spacing(10)+7px)]",
                      scopeDot[milestone.scope],
                    )}
                  />
                  <Card className="gap-0 overflow-visible rounded-2xl px-dot-wide py-6 text-base shadow-card ring-0 transition duration-250 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="font-serif text-kpi-sm font-bold text-olive-dark">
                        {milestone.year}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-kpi-source font-semibold",
                          scopeBadge[milestone.scope],
                        )}
                      >
                        <Icon aria-hidden="true" className="size-3.5" />
                        {scopeLabels[milestone.scope]}
                      </span>
                    </div>
                    <h3 className="mb-2 font-sans text-card-title font-semibold text-ink">
                      {milestone.title}
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
