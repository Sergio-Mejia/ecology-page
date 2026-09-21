import type { Kpi } from "@/data/types";

export const kpis: Kpi[] = [
  {
    id: "emisiones-gei",
    value: "8,8 %",
    label: "de las emisiones globales de GEI atribuibles al turismo (2019)",
    source: "Sun et al., 2024",
    tone: "terracota",
  },
  {
    id: "huella-carbono",
    value: "5,2 GtCO₂e",
    label: "huella de carbono del turismo mundial (2019)",
    source: "Sun et al., 2024",
    tone: "olive-dark",
  },
  {
    id: "residuos-solidos",
    value: "35 M ton/año",
    label: "residuos sólidos generados por la actividad turística",
    source: "OMT, citado en Sociedad y Ambiente",
    tone: "terracota",
  },
  {
    id: "visitantes-colombia",
    value: "1.572.646",
    label: "visitantes a áreas protegidas de Colombia en 2023",
    source: "Parques Nacionales Naturales",
    tone: "olive-dark",
  },
];
