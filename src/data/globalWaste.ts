import type {
  ChartCaption,
  SectionHeading,
  WasteGauge,
  WasteScenarioPoint,
} from "@/data/types";

export const globalWasteHeading: SectionHeading = {
  eyebrow: "Contexto global",
  title: "El planeta frente a sus residuos",
};

export const globalWasteProse =
  "Los residuos que genera el turismo se suman a un sistema global que ya está " +
  "bajo presión. En 2022 el mundo produjo 2.560 millones de toneladas de " +
  "residuos sólidos municipales, una cifra que el Banco Mundial no esperaba " +
  "alcanzar sino hasta 2030; en promedio, cada persona genera 0,88 kg de " +
  "residuos al día. De mantenerse la tendencia actual, el volumen llegaría a " +
  "3.860 millones de toneladas anuales en 2050, mientras que un escenario de " +
  "alta ambición —con prevención, reciclaje y compostaje a gran escala— lo " +
  "mantendría cerca de los 2.600 millones (Banco Mundial, 2026).";

export const globalWasteCaption: ChartCaption = {
  title: "Generación mundial de residuos municipales",
  subtitle: "Miles de millones de toneladas al año",
  description:
    "Gráfico de barras horizontales: en 2022 se generaron 2,56 mil millones de " +
    "toneladas de residuos; en 2050 serían 3,86 mil millones con la tendencia " +
    "actual y 2,6 mil millones en un escenario de alta ambición.",
};

export const globalWasteScenarios: WasteScenarioPoint[] = [
  { id: "2022", scenario: "2022", tonnes: 2.56 },
  { id: "2050-tendencial", scenario: "2050 · tendencia actual", tonnes: 3.86 },
  { id: "2050-ambicion", scenario: "2050 · alta ambición", tonnes: 2.6 },
];

/** Gris oliva para el dato real, terracota para el riesgo, oliva para la meta. */
export const globalWasteBarColors = [
  "var(--chart-4)",
  "var(--chart-1)",
  "var(--chart-3)",
];

export const globalWasteGauges: WasteGauge[] = [
  {
    id: "alimentos",
    percent: 38,
    display: "38 %",
    label: "de los residuos municipales del mundo son alimentos",
    tone: "olive-dark",
  },
  {
    id: "mal-gestionados",
    percent: 33,
    display: "≈ 1/3",
    label: "de los residuos no se recolecta o termina en botaderos a cielo abierto",
    tone: "terracota",
  },
  {
    id: "recuperados",
    percent: 21,
    display: "21 %",
    label: "se recupera mediante reciclaje, compostaje o digestión anaerobia",
    tone: "olive-dark",
  },
];

export const globalWasteSource = "Fuente: Banco Mundial, What a Waste 3.0 (2026).";
