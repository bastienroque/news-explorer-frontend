import { Link } from "react-router-dom";
import github from "../../assets/github-icon.svg";

const Footer = () => {
  return (
    <footer className="footer container">
      <p className="footer__paragraph">
        &copy; 2026 News Explorer, integrating News API
      </p>
      <div className="footer__nav">
        <Link to="/" className="footer__link">
          Início
        </Link>
        <a
          href="https://tripleten.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          TripleTen
        </a>
        <a
          href="https://github.com/bastienroque"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <img src={github} alt="black github icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
