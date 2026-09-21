import type { Recommendation, SectionHeading } from "@/data/types";

export const recommendationsHeading: SectionHeading = {
  eyebrow: "Buenas prácticas",
  title: "Hacia un ecoturismo de bajo impacto",
};

export const recommendations: Recommendation[] = [
  {
    id: "plasticos",
    icon: "leaf",
    title: "Reducción de plásticos de un solo uso",
    description:
      "Sustituir envases desechables por alternativas reutilizables y establecer " +
      "estaciones de agua potable reduce en origen el residuo más común en zonas " +
      "naturales.",
  },
  {
    id: "separacion",
    icon: "recycle",
    title: "Separación en la fuente",
    description:
      "Implementar puntos de recolección diferenciada y esquemas de reciclaje " +
      "dentro de los alojamientos y senderos evita que los residuos terminen " +
      "dispersos en el ecosistema.",
  },
  {
    id: "certificacion",
    icon: "award",
    title: "Certificación en sostenibilidad",
    description:
      "La adopción de las Normas Técnicas Sectoriales de Turismo Sostenible " +
      "(NTS-TS) y de la norma ISO 14001 formaliza la gestión ambiental de " +
      "destinos y operadores.",
  },
  {
    id: "educacion",
    icon: "book",
    title: "Educación al visitante",
    description:
      "Informar al turista sobre el principio de «no dejar rastro» y su huella " +
      "individual promueve conductas responsables durante toda la visita.",
  },
];
