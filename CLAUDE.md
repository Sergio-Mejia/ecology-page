# CLAUDE.md

## Proyecto
Dashboard web "Diagnóstico del manejo de residuos sólidos y huella ambiental del
turismo ecológico". SPA informativa de una sola vista, basada en datos: carrusel
hero, KPIs, gráficos y secciones de contenido. Todo el contenido va en español.

## Stack
- React 19 + Vite
- TypeScript en modo strict
- Tailwind CSS v4 (config CSS-first vía `@tailwindcss/vite`; SIN `tailwind.config.js`
  ni `postcss.config.js`)
- shadcn/ui para componentes (Radix + tokens propios)
- Gráficos con el componente `Chart` de shadcn (sobre Recharts)
- pnpm como gestor de paquetes
- Alias de importación `@/*` → `src/*`

## Comandos
- `pnpm dev` — servidor de desarrollo
- `pnpm build` — build de producción (`tsc -b && vite build`)
- `pnpm preview` — previsualizar el build
- `pnpm lint` — ESLint
- Añadir componentes: `pnpm dlx shadcn@latest add <componente>`
- NO editar a mano los archivos generados en `src/components/ui/`, salvo theming por tokens.

## Estructura
src/
  components/
    ui/          # primitivos shadcn (generados)
    sections/    # una sección del dashboard por archivo (Hero, KpiGrid, ...)
    charts/      # wrappers de gráficos
  data/          # datos y referencias, estáticos y tipados
  lib/           # utils (cn, formatters)
  hooks/
  App.tsx
  index.css      # @import "tailwindcss" + tokens del design system

## Convenciones de código
- TypeScript strict: prohibido `any`; tipa props e interfaces de datos explícitamente.
- Un componente por archivo. PascalCase para componentes y sus archivos
  (`HeroCarousel.tsx`); camelCase para funciones/vars; hooks con prefijo `use`.
- Usa primitivos de shadcn (`Button`, `Card`, `Carousel`, `Chart`...) antes de escribir
  HTML crudo. Compón, no reescribas.
- Estiliza solo con clases de Tailwind + tokens del design system. Nada de CSS inline
  ni valores mágicos (colores/px sueltos).
- Combina clases condicionales con el helper `cn()` de `@/lib/utils`.
- Los datos y textos largos (KPIs, párrafos, referencias) viven tipados en `src/data/`,
  no hardcodeados en el JSX.
- Accesibilidad: `alt` en imágenes, `aria-*` en los controles del carrusel, contraste AA.

## Design system (diseño aprobado en Claude Design)
Define estos tokens en `src/index.css` y referencia siempre por token, nunca por hex suelto.
- Fondo: #FAF7F0 · Superficie: #FFFFFF / #F3EEE3
- Oliva principal (primary): #6B7A3F · Oliva oscuro (nav/headers): #3F4A26
- Acento terracota: #C57B4E · Acento ámbar: #D9A441
- Texto principal: #2B2B22 · Texto secundario: #6E6A5C
- Radios: cards `rounded-2xl` (~20px), botones `rounded-xl` (~12px)
- Tipografía: títulos serif (Playfair Display), cuerpo sans (Inter)
- Estética: elegante y minimalista, sombras suaves, mucho espacio en blanco.
  El oliva domina; los cálidos solo como acento.

## Secciones (orden de la página)
1. Navbar fija con anclas
2. Hero con carrusel de imágenes grandes
3. Grid de 4 tarjetas KPI
4. Huella ambiental (gráfico de líneas: 2009 / 2013 / 2019)
5. Diagnóstico de residuos sólidos (gráfico + tarjetas)
6. Caso Colombia (tarjetas de datos)
7. Recomendaciones (4 tarjetas con icono)
8. Footer con referencias bibliográficas

## Reglas (no hacer)
- No añadir otras librerías de UI (MUI, Chakra, etc.). Solo shadcn + Tailwind.
- No crear `tailwind.config.js` (Tailwind v4 es CSS-first).
- No comentarios triviales ni código muerto.
- No cambiar paleta, radios ni tipografía sin que se pida.
- No inventar datos: usar los de `src/data/` y respetar las citas.

## Referencia de diseño
El diseño fuente está en `design-reference/` (código y capturas exportadas de
Claude Design). Es la fuente de verdad visual: reprodúcelo fielmente, adaptándolo
a shadcn + tokens.