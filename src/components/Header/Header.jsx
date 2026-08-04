import { header } from "../../portfolio";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center brutal-header">
      <h3>
        {homepage ? (
          <a href={homepage} className="brutal-logo link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
