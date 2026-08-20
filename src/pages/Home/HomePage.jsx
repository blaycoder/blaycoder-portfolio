import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Experience from "../../components/Experience/Experience";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import MoreProjects from "../../components/MoreProjects/MoreProjects";
import FAQ from "../../components/FAQ/FAQ";
import ClosingCTA from "../../components/ClosingCTA/ClosingCTA";
import ExitIntentModal from "../../components/ExitIntentModal/ExitIntentModal";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import AskAyomide from "../../components/Companion/AskAyomide";

const HomePage = () => {
  const [companionOpen, setCompanionOpen] = useState(false);

  useEffect(() => {
    document.title = "Blaycoder-Portfolio";
  }, []);

  return (
    <div id="top" className="app">
      <Header />
      <main className="w-full">
        <Hero />
        <Experience />
        <FeaturedProjects />
        <MoreProjects />
        <FAQ />
        <ClosingCTA />
      </main>
      <div className="app__wrap">
        <Footer />
      </div>
      <AskAyomide open={companionOpen} onOpenChange={setCompanionOpen} />
      <ScrollToTop companionOpen={companionOpen} />
      <ExitIntentModal />
    </div>
  );
};

export default HomePage;
