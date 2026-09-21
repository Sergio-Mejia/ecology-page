import type {
  ChartCaption,
  Chip,
  SectionHeading,
  WastePerTouristPoint,
} from "@/data/types";

export const wasteHeading: SectionHeading = {
  eyebrow: "Gestión de residuos",
  title: "Los residuos que deja el visitante",
};

export const wasteProse =
  "La generación de residuos es uno de los impactos más visibles del turismo " +
  "sobre los entornos naturales. Un solo turista produce entre 2 y 4,5 litros de " +
  "residuos al día, según el tipo de alojamiento (Brenner, 1999), y puede " +
  "generar hasta un 25 % más de residuos que la media de su lugar de origen " +
  "(UNEP, 2003). El problema se agudiza en las áreas naturales protegidas, donde " +
  "con frecuencia no existen estrategias adecuadas de recolección ni " +
  "disposición, ni para residuos ordinarios ni peligrosos, lo que se traduce en " +
  "contaminación visual, deterioro del paisaje y riesgos para la fauna y la " +
  "flora. A escala marina, el costo de la basura para el turismo y la pesca se " +
  "estima entre 259 y 695 millones de euros (Parlamento Europeo).";

export const wasteChips: Chip[] = [
  {
    id: "exceso-residuos",
    text: "+25 % de residuos frente al promedio del lugar de origen del turista — UNEP, 2003",
  },
  {
    id: "costo-basura-marina",
    text: "259–695 M€ costo estimado de la basura marina para el turismo y la pesca — Parlamento Europeo",
  },
];

export const wasteCaption: ChartCaption = {
  title: "Residuos generados por turista",
  subtitle: "Litros por día, según tipo de alojamiento",
  description:
    "Gráfico de barras: una casa de huéspedes genera 2 litros de residuos por " +
    "turista al día, un hotel 3 litros y un conjunto hotelero 4,5 litros.",
};

/** Un tono de oliva por tipo de alojamiento, de más claro a más oscuro. */
export const wasteBarColors = [
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
];

export const wastePerTourist: WastePerTouristPoint[] = [
  { id: "casa-huespedes", accommodation: "Casa de huéspedes", litres: 2 },
  { id: "hotel", accommodation: "Hotel", litres: 3 },
  { id: "conjunto-hotelero", accommodation: "Conjunto hotelero", litres: 4.5 },
];
