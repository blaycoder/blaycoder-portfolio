import { useState } from "react";
import { Menu, X } from "lucide-react";
import { featuredProjects, aboutSection, capabilities, contact } from "../../portfolio";
import "./Navbar.css";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);
  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul className={`nav__list${showNavList ? " is-open" : ""}`}>
        <li className="nav__list-item">
          <a href="#top" onClick={toggleNavList} className="link link--nav">
            Home
          </a>
        </li>

        {featuredProjects.length ? (
          <li className="nav__list-item">
            <a href="#work" onClick={toggleNavList} className="link link--nav">
              Work
            </a>
          </li>
        ) : null}

        {aboutSection?.paragraphs?.length ? (
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={toggleNavList}
              className="link link--nav"
            >
              About
            </a>
          </li>
        ) : null}

        {capabilities?.length ? (
          <li className="nav__list-item">
            <a
              href="#what-i-do"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Capabilities
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger brutal-nav-btn"
        aria-label="toggle navigation"
      >
        {showNavList ? <X size={20} /> : <Menu size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
