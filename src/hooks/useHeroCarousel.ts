import { useCallback, useState } from "react";

interface HeroCarousel {
  activeIndex: number;
  goTo: (index: number) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}

export function useHeroCarousel(slideCount: number): HeroCarousel {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => setActiveIndex(((index % slideCount) + slideCount) % slideCount),
    [slideCount],
  );

  const goToPrevious = useCallback(
    () => setActiveIndex((current) => (current + slideCount - 1) % slideCount),
    [slideCount],
  );

  const goToNext = useCallback(
    () => setActiveIndex((current) => (current + 1) % slideCount),
    [slideCount],
  );

  return { activeIndex, goTo, goToPrevious, goToNext };
}
