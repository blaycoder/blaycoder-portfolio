import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Credibility from "../../components/Credibility/Credibility";
import Experience from "../../components/Experience/Experience";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import WhatIDo from "../../components/WhatIDo/WhatIDo";
import MoreProjects from "../../components/MoreProjects/MoreProjects";
import About from "../../components/About/About";
import FAQ from "../../components/FAQ/FAQ";
import ClosingCTA from "../../components/ClosingCTA/ClosingCTA";
import ExitIntentModal from "../../components/ExitIntentModal/ExitIntentModal";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import AskAyomide from "../../components/Companion/AskAyomide";

const HomePage = () => {
  const [companionOpen, setCompanionOpen] = useState(false);

  useEffect(() => {
    document.title =
      "Ayomide — Frontend Engineer building products that solve real problems";
  }, []);

  return (
    <div id="top" className="app">
      <Header />
      <main className="w-full">
        <Hero />
        <Credibility />
        <FeaturedProjects />
        <WhatIDo />
        <Experience />
        <MoreProjects />
        <About />
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
