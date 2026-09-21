import { createCn } from "cn/config";

/**
 * Los tamaños de texto del design system son tokens propios (`text-kpi`,
 * `text-body`...). Sin registrarlos aquí, `cn` los toma por colores y los
 * descarta al fusionar con un `text-<color>`.
 */
const fontSizes = [
  "eyebrow",
  "brand",
  "brand-sm",
  "navlink",
  "navlink-sm",
  "caption",
  "hero-title",
  "hero-subtitle",
  "section-title",
  "section-title-sm",
  "body",
  "body-sm",
  "card-title",
  "chip",
  "kpi",
  "kpi-sm",
  "kpi-label",
  "kpi-source",
  "chart-title",
  "chart-sub",
  "placeholder",
  "footer-title",
  "ref",
  "note",
];

export const cn = createCn({
  extend: { classGroups: { "font-size": [{ text: fontSizes }] } },
});
