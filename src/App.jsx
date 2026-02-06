import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import ExitIntentModal from "./components/ExitIntentModal/ExitIntentModal";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import PortfolioChat from "./components/ChatWidget/PortfolioChat";

const App = () => {
  const { themeName } = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <div className="app__wrap">
        <Header />
        <main>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <PortfolioChat/>
        <Footer />
      </div>
      <ScrollToTop />
      <ExitIntentModal />
    </div>
  );
};

export default App;
