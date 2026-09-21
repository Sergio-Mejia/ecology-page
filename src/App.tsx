import { CasoColombia } from "@/components/sections/CasoColombia";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HuellaAmbiental } from "@/components/sections/HuellaAmbiental";
import { KpiGrid } from "@/components/sections/KpiGrid";
import { Navbar } from "@/components/sections/Navbar";
import { Recomendaciones } from "@/components/sections/Recomendaciones";
import { Residuos } from "@/components/sections/Residuos";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <KpiGrid />
        <HuellaAmbiental />
        <Residuos />
        <CasoColombia />
        <Recomendaciones />
      </main>
      <Footer />
    </>
  );
}

export default App;
