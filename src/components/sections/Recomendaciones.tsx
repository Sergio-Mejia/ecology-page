import { Award, BookOpen, Leaf, Recycle, type LucideIcon } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import {
  recommendations,
  recommendationsHeading,
} from "@/data/recommendations";
import type { RecommendationIcon } from "@/data/types";
import { cn } from "@/lib/utils";

const icons: Record<RecommendationIcon, LucideIcon> = {
  leaf: Leaf,
  recycle: Recycle,
  award: Award,
  book: BookOpen,
};

const iconColors: Record<RecommendationIcon, string> = {
  leaf: "text-olive",
  recycle: "text-terracota",
  award: "text-ambar",
  book: "text-olive",
};

export function Recomendaciones() {
  return (
    <section id="recomendaciones" className="py-16 desktop:py-24">
      <Container>
        <SectionHeading heading={recommendationsHeading} />
        <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2">
          {recommendations.map((item) => {
            const Icon = icons[item.icon];

            return (
              <Card
                key={item.id}
                className="flex flex-row gap-4.5 overflow-visible rounded-2xl p-7.5 text-base shadow-card ring-0 transition duration-250 hover:-translate-y-[5px] hover:shadow-card-hover"
              >
                <div className="flex size-badge shrink-0 items-center justify-center rounded-badge bg-cream-100">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.8}
                    className={cn("size-6", iconColors[item.icon])}
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-sans text-card-title font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
