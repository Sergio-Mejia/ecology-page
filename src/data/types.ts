export interface HeroSlide {
  id: string;
  /** Fotografía de fondo, importada desde `src/assets`. */
  image: string;
  /** Descripción de la fotografía para lectores de pantalla. */
  alt: string;
  /** Degradado de respaldo bajo la imagen, según la paleta del design system. */
  gradient: string;
  caption: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  slides: HeroSlide[];
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SectionHeading {
  eyebrow: string;
  title: string;
}

export type FigureTone = "terracota" | "olive-dark";

export interface Kpi {
  id: string;
  value: string;
  label: string;
  source: string;
  tone: FigureTone;
}

export interface ColombiaStat {
  id: string;
  value: string;
  label: string;
  tone: FigureTone;
}

export interface ChartCaption {
  title: string;
  subtitle: string;
  /** Descripción para lectores de pantalla. */
  description: string;
}

export interface CarbonFootprintPoint {
  year: number;
  gtco2e: number;
}

export interface WastePerTouristPoint {
  id: string;
  accommodation: string;
  litres: number;
}

export interface Chip {
  id: string;
  text: string;
}

export type RecommendationIcon = "leaf" | "recycle" | "award" | "book";

export interface Recommendation {
  id: string;
  icon: RecommendationIcon;
  title: string;
  description: string;
}

export interface ReferenceSegment {
  text: string;
  italic?: boolean;
  href?: string;
}

export interface Reference {
  id: string;
  segments: ReferenceSegment[];
}
