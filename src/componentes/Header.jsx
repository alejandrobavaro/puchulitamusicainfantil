import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./SesionAuthContext";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const { state, dispatch } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const shouldShowSearchBar = location.pathname === "/tienda" || location.pathname === "/musica";

  return (
    <header className="header">
      <div className="containerHeader">
        <div className="header-topHeader">
          <div className="search-containerHeader">
            <img
              src="/img/02-logos/puchulitamusicainfantil1.png"
              alt="Logo"
              className="logoHeader"
            />
            {shouldShowSearchBar && (
              <div className="search-bar-containerHeader">
                <input
                  type="text"
                  placeholder={location.pathname === "/tienda" ? "Buscar productos" : "Buscar canciones"}
                  className="search-barHeader"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-buttonHeader">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            )}
          </div>
          <button
            className="navbar-togglerHeader"
            type="button"
            aria-label="Toggle navigation"
            onClick={handleToggleMobileMenu}
          >
            <span className="navbar-toggler-iconHeader" />
          </button>
        </div>

        <nav className={`navbarHeader ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="navbar-navHeader">
            <Link
              className="nav-linkHeader"
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              className="nav-linkHeader"
              to="/musica"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MÚSICA
            </Link>
            <Link
              className="nav-linkHeader"
              to="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACTO
            </Link>
            <Link
              className="nav-linkHeader"
              to="/tienda"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TIENDA
            </Link>
            {!state.isAuthenticated ? (
              <>
                <Link
                  className="nav-linkHeader"
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  INICIA SESIÓN
                </Link>
                <Link
                  className="nav-linkHeader"
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  REGÍSTRATE
                </Link>
              </>
            ) : (
              <Link
                className="nav-linkHeader"
                to="/logout"
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                  setIsMobileMenuOpen(false);
                }}
              >
                CERRÁ SESIÓN
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
