import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LogoutIcon from "../../assets/logout-white-icon.svg?react";
import MenuIcon from "../../assets/hamburger-menu-icon.svg?react";
import CloseIcon from "../../assets/close-cross-icon.svg?react";

const Header = ({ onLoginSwitch, onLogOut }) => {
  const { isLoggedIn, userData } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSavedNews = location.pathname === "/saved-news";
  const themeClass = isHome ? "theme-light" : "theme-dark";

  return (
    <header className={`header ${themeClass}`}>
      <div className={`header__content ${isOpen ? "nav-open" : ""}`}>
        <Link to="/">
          <h3 className="header__title" onClick={closeMenu}>
            News Explorer
          </h3>
        </Link>
        <button
          className="header__nav-burger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          {isOpen ? (
            <CloseIcon className="icon" />
          ) : (
            <MenuIcon className="icon" />
          )}
        </button>
      </div>
      {isOpen && <div className="nav__overlay" onClick={closeMenu} />}
      {isLoggedIn ? (
        <nav
          className={`navbar ${isOpen ? "is-open" : ""}`}
          id="main-navigation"
        >
          <ul className="nav-links">
            <li>
              <Link
                className={`nav-link ${isHome ? "active" : ""}`}
                to="/"
                onClick={closeMenu}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${isSavedNews ? "active" : ""}`}
                to="/saved-news"
                onClick={closeMenu}
              >
                Artigos salvos
              </Link>
            </li>
            <li>
              <button className="nav-link" onClick={onLogOut}>
                {userData.username} <LogoutIcon className="icon" />
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav
          className={`navbar ${isOpen ? "is-open" : ""}`}
          id="main-navigation"
        >
          <ul className="nav-links">
            <li>
              <Link
                className={`nav-link ${isHome ? "active" : ""}`}
                to="/"
                onClick={closeMenu}
              >
                Início
              </Link>
            </li>
            <li>
              <button className="nav-link" onClick={onLoginSwitch}>
                Entrar
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
