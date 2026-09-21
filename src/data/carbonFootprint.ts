import type {
  CarbonFootprintPoint,
  ChartCaption,
  SectionHeading,
} from "@/data/types";

export const carbonFootprintHeading: SectionHeading = {
  eyebrow: "Huella de carbono",
  title: "La huella climática del viajar",
};

export const carbonFootprintProse =
  "El turismo se ha convertido en uno de los grandes contribuyentes al cambio " +
  "climático. Entre 2009 y 2013 su huella de carbono pasó de 3,9 a 4,5 GtCO₂e " +
  "—cuatro veces más de lo estimado en cálculos anteriores— y representó cerca " +
  "del 8 % de las emisiones globales de gases de efecto invernadero (Lenzen et " +
  "al., 2018). Para 2019, esa cifra ascendió al 8,8 %, con 5,2 GtCO₂e, y creció " +
  "a un ritmo del 3,5 % anual, el doble que la economía mundial (Sun et al., " +
  "2024). El transporte concentra la mayor parte del impacto: la aviación por sí " +
  "sola explica el 52 % de las emisiones directas del sector, y la intensidad de " +
  "carbono del turismo supera en cerca de un 30 % el promedio de la economía " +
  "global (Sun et al., 2024).";

export const carbonFootprintCaption: ChartCaption = {
  title: "Evolución de la huella de carbono del turismo",
  subtitle: "GtCO₂e, 2009–2019",
  description:
    "Gráfico de líneas: la huella de carbono del turismo pasó de 3,9 GtCO2e en " +
    "2009 a 4,5 en 2013 y 5,2 en 2019.",
};

export const carbonFootprint: CarbonFootprintPoint[] = [
  { year: 2009, gtco2e: 3.9 },
  { year: 2013, gtco2e: 4.5 },
  { year: 2019, gtco2e: 5.2 },
];
