import type { Milestone, MilestoneScope, SectionHeading } from "@/data/types";

export const regulationsHeading: SectionHeading = {
  eyebrow: "Marco normativo",
  title: "Normas e iniciativas que marcan el rumbo",
};

export const regulationsIntro =
  "La gestión de residuos y la descarbonización del turismo no dependen solo " +
  "de la voluntad de los viajeros. En los últimos años, Colombia y la " +
  "comunidad internacional han fijado reglas y compromisos que obligan a " +
  "productores, prestadores turísticos y destinos a reducir su impacto.";

export const scopeLabels: Record<MilestoneScope, string> = {
  colombia: "Colombia",
  internacional: "Internacional",
};

export const milestones: Milestone[] = [
  {
    id: "res-1407",
    year: 2018,
    scope: "colombia",
    title: "Resolución 1407 de 2018",
    description:
      "El Ministerio de Ambiente reglamenta la gestión de residuos de envases y " +
      "empaques de papel, cartón, plástico, vidrio y metal, y obliga a los " +
      "productores a financiar planes de aprovechamiento (responsabilidad " +
      "extendida del productor).",
  },
  {
    id: "gtpi",
    year: 2020,
    scope: "internacional",
    title: "Iniciativa Global de Turismo y Plásticos",
    description:
      "ONU Turismo y el PNUMA, con la Fundación Ellen MacArthur, lanzan una " +
      "alianza para que hoteles, operadores y destinos eliminen los plásticos " +
      "innecesarios y adopten modelos reutilizables.",
  },
  {
    id: "glasgow",
    year: 2021,
    scope: "internacional",
    title: "Declaración de Glasgow sobre acción climática en el turismo",
    description:
      "Presentada en la COP26, compromete a sus firmantes a reducir a la mitad " +
      "las emisiones del turismo para 2030 y alcanzar cero emisiones netas lo " +
      "antes posible, antes de 2050.",
  },
  {
    id: "ley-2232",
    year: 2022,
    scope: "colombia",
    title: "Ley 2232 de 2022",
    description:
      "Establece la eliminación gradual de 21 productos plásticos de un solo " +
      "uso, con prohibiciones escalonadas que comenzaron el 7 de julio de 2024 " +
      "y se extienden hasta 2030.",
  },
  {
    id: "decreto-2192",
    year: 2023,
    scope: "colombia",
    title: "Decreto 2192 de 2023",
    description:
      "Reglamenta parcialmente la Ley 2232 e incluye disposiciones sobre el " +
      "ingreso de plásticos de un solo uso a las áreas protegidas, un punto " +
      "clave para el ecoturismo.",
  },
];
