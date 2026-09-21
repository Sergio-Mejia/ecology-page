import type { ColombiaStat, SectionHeading } from "@/data/types";

export const colombiaHeading: SectionHeading = {
  eyebrow: "Caso de estudio",
  title: "Ecoturismo y áreas protegidas en Colombia",
};

export const colombiaMapPlaceholder =
  "[ Mapa: Sistema de Parques Nacionales Naturales de Colombia — 59 PNN, más de " +
  "17 millones de hectáreas conservadas ]";

export const colombiaProse =
  "Colombia conserva su biodiversidad a través de 59 parques nacionales " +
  "naturales, que protegen más de 17 millones de hectáreas y representan el " +
  "64,5 % de los ecosistemas del país (Parques Nacionales Cómo Vamos, 2021). Sin " +
  "embargo, 45 de esos 59 parques presentan ecosistemas con algún grado de " +
  "amenaza (Parques Nacionales Cómo Vamos, 2021), y la presión turística sigue " +
  "en aumento: en 2023 las áreas protegidas recibieron 1.572.646 visitantes, un " +
  "46,85 % más que dos años antes (Parques Nacionales Naturales), mientras el " +
  "Plan Sectorial de Turismo 2022-2026 proyecta alcanzar 7,5 millones de " +
  "turistas en el país (MinCIT). Un caso ilustrativo es Puerto Nariño " +
  "(Amazonas), donde el destino turístico generó 2.020,98 toneladas de CO₂eq al " +
  "año —una huella ecológica de 3.886,5 hectáreas, equivalente a 19,43 veces el " +
  "área de su circunscripción—, siendo el consumo energético su principal fuente " +
  "de emisiones (Sandoval Gaviria & Gutiérrez-Fernández, 2021).";

export const colombiaStats: ColombiaStat[] = [
  { id: "pnn", value: "59", label: "parques nacionales naturales", tone: "olive-dark" },
  { id: "hectareas", value: "17 M ha", label: "de territorio conservado", tone: "terracota" },
  {
    id: "amenazados",
    value: "45/59",
    label: "parques con ecosistemas amenazados",
    tone: "olive-dark",
  },
  {
    id: "puerto-narino",
    value: "2.020,98 t",
    label: "CO₂eq/año — huella medida en Puerto Nariño",
    tone: "terracota",
  },
];
