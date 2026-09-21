import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hero } from "@/data/hero";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";
import { cn } from "@/lib/utils";

export function Hero() {
  const { slides, title, subtitle } = hero;
  const { activeIndex, goTo, goToPrevious, goToNext } = useHeroCarousel(
    slides.length,
  );

  return (
    <section
      id="inicio"
      aria-roledescription="carrusel"
      aria-label="Presentación del diagnóstico"
      className="relative h-hero-sm w-full overflow-hidden bg-muted-foreground tablet:h-hero"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          role="group"
          aria-roledescription="diapositiva"
          aria-label={`${index + 1} de ${slides.length}`}
          aria-hidden={index !== activeIndex}
          className={cn(
            "absolute inset-0 transition-opacity duration-900",
            index === activeIndex ? "opacity-100" : "opacity-0",
          )}
        >
          <div className={cn("absolute inset-0", slide.gradient)} />
          <img
            src={slide.image}
            alt={slide.alt}
            fetchPriority={index === 0 ? "high" : undefined}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-scrim-soft/15 from-0% via-scrim-soft/35 via-45% to-scrim/86 to-100%" />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 z-5 px-10 pb-16 text-center">
        <h1 className="mx-auto mb-4.5 max-w-hero-title text-hero-title leading-hero-title font-bold text-cream">
          {title}
        </h1>
        <p className="mx-auto mb-5.5 max-w-hero-subtitle text-hero-subtitle leading-hero-subtitle text-cream-100">
          {subtitle}
        </p>
        <p
          aria-live="polite"
          className="min-h-5.5 text-caption font-semibold tracking-subtle text-ambar"
        >
          {slides[activeIndex].caption}
        </p>
      </div>

      <div className="absolute top-1/2 left-6 z-6 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Diapositiva anterior"
          onClick={goToPrevious}
          className="size-arrow-sm rounded-xl bg-scrim/40 text-cream duration-200 hover:scale-105 hover:bg-scrim/65 hover:text-cream tablet:size-arrow"
        >
          <ChevronLeft className="size-[18px]" strokeWidth={2.3} />
        </Button>
      </div>

      <div className="absolute top-1/2 right-6 z-6 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Siguiente diapositiva"
          onClick={goToNext}
          className="size-arrow-sm rounded-xl bg-scrim/40 text-cream duration-200 hover:scale-105 hover:bg-scrim/65 hover:text-cream tablet:size-arrow"
        >
          <ChevronRight className="size-[18px]" strokeWidth={2.3} />
        </Button>
      </div>

      <div className="absolute inset-x-0 bottom-5 z-6 flex justify-center gap-dot-gap">
        {slides.map((slide, index) => (
          <Button
            key={slide.id}
            variant="ghost"
            size="icon"
            aria-label={`Ir a la diapositiva ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => goTo(index)}
            className={cn(
              "h-dot rounded-full p-0 duration-300",
              index === activeIndex
                ? "w-dot-wide bg-ambar hover:bg-ambar"
                : "w-dot bg-cream/45 hover:bg-cream/75",
            )}
          />
        ))}
      </div>
    </section>
  );
}
