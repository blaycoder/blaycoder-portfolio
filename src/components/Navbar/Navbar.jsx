import { useState } from "react";
import { Menu, X } from "lucide-react";
import { featuredProjects, moreProjects, experience, faq, contact } from "../../portfolio";
import "./Navbar.css";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);
  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul className={`nav__list${showNavList ? " is-open" : ""}`}>
        {featuredProjects.length ? (
          <li className="nav__list-item">
            <a href="#work" onClick={toggleNavList} className="link link--nav">
              Work
            </a>
          </li>
        ) : null}

        {experience?.length ? (
          <li className="nav__list-item">
            <a
              href="#experience"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Experience
            </a>
          </li>
        ) : null}

        {moreProjects.length ? (
          <li className="nav__list-item">
            <a
              href="#more-projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {faq?.length ? (
          <li className="nav__list-item">
            <a href="#faq" onClick={toggleNavList} className="link link--nav">
              FAQ
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
