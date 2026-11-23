import { CasoColombia } from "@/components/sections/CasoColombia";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HuellaAmbiental } from "@/components/sections/HuellaAmbiental";
import { KpiGrid } from "@/components/sections/KpiGrid";
import { MarcoNormativo } from "@/components/sections/MarcoNormativo";
import { Navbar } from "@/components/sections/Navbar";
import { PanoramaGlobal } from "@/components/sections/PanoramaGlobal";
import { Recomendaciones } from "@/components/sections/Recomendaciones";
import { Residuos } from "@/components/sections/Residuos";
import { VideoSection } from "@/components/sections/VideoSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <KpiGrid />
        <HuellaAmbiental />
        <Residuos />
        <PanoramaGlobal />
        <CasoColombia />
        <VideoSection />
        <MarcoNormativo />
        <Recomendaciones />
      </main>
      <Footer />
    </>
  );
}

export default App;
