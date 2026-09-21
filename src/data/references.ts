import type { Reference } from "@/data/types";

export const referencesTitle = "Referencias";

export const referencesNote =
  "Panel de diagnóstico con fines académicos e informativos.";

export const references: Reference[] = [
  {
    id: "brenner-1999",
    segments: [
      {
        text: "Brenner, L. (1999). Modelo para la evaluación de la aptitud turístico-ambiental. ",
      },
      { text: "Investigaciones Geográficas", italic: true },
      { text: "." },
    ],
  },
  {
    id: "lenzen-2018",
    segments: [
      {
        text: "Lenzen, M., Sun, Y.-Y., Faturay, F., Ting, Y.-P., Geschke, A., & Malik, A. (2018). The carbon footprint of global tourism. ",
      },
      { text: "Nature Climate Change, 8", italic: true },
      { text: "(6), 522–528. " },
      {
        text: "doi.org/10.1038/s41558-018-0141-x",
        href: "https://doi.org/10.1038/s41558-018-0141-x",
      },
    ],
  },
  {
    id: "pncv-2021",
    segments: [
      {
        text: "Parques Nacionales Cómo Vamos. (2021). Informe sobre el estado de los parques nacionales de Colombia.",
      },
    ],
  },
  {
    id: "sandoval-2021",
    segments: [
      {
        text: "Sandoval Gaviria, D., & Gutiérrez-Fernández, F. (2021). Cálculo de las huellas de carbono y ecológica del destino turístico de Puerto Nariño (Amazonas). ",
      },
      { text: "Turismo y Sociedad, 29", italic: true },
      { text: ", 79–94." },
    ],
  },
  {
    id: "sun-2024",
    segments: [
      {
        text: "Sun, Y.-Y., Faturay, F., Lenzen, M., Gössling, S., & Higham, J. (2024). Drivers of global tourism carbon emissions. ",
      },
      { text: "Nature Communications, 15", italic: true },
      { text: ". " },
      {
        text: "doi.org/10.1038/s41467-024-54582-7",
        href: "https://doi.org/10.1038/s41467-024-54582-7",
      },
    ],
  },
  {
    id: "unep-2003",
    segments: [
      {
        text: "United Nations Environment Programme (UNEP). (2003). Tourism and the environment.",
      },
    ],
  },
];
