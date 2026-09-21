import excursionistasImg from "@/assets/c1.jpg";
import huellasImg from "@/assets/c2.png";
import arrecifeImg from "@/assets/c3.jpg";
import type { HeroContent } from "@/data/types";

export const hero: HeroContent = {
  title:
    "Diagnóstico del manejo de residuos sólidos y huella ambiental del turismo ecológico",
  subtitle:
    "Un panorama basado en evidencia sobre los impactos del ecoturismo en los ecosistemas y las estrategias para reducir su huella.",
  slides: [
    {
      id: "excursionistas",
      image: excursionistasImg,
      alt: "Grupo de excursionistas sentados en una roca frente a una montaña cubierta de niebla.",
      gradient: "bg-linear-135 from-olive-light to-olive-dark",
      caption: "El turismo de naturaleza crece; su huella ambiental, también.",
    },
    {
      id: "huellas",
      image: huellasImg,
      alt: "Huellas de botas marcadas en la arena entre rocas, en blanco y negro.",
      gradient: "bg-linear-135 from-ambar to-terracota",
      caption:
        "Cada visitante deja una huella medible en residuos, agua y carbono.",
    },
    {
      id: "arrecife",
      image: arrecifeImg,
      alt: "Arrecife de coral con peces de colores nadando entre las formaciones.",
      gradient: "bg-linear-135 from-olive to-ink",
      caption:
        "Gestionar bien los residuos es proteger la biodiversidad que atrae al viajero.",
    },
  ],
};
