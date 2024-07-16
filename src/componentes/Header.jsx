import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importa el hook useAuth para obtener el estado de autenticación
import "../assets/scss/estilo.scss";

const Header = ({ cart, searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const showCartLink = location.pathname.startsWith("/tienda");
  const showSearchBar = location.pathname === "/tienda";
  const { state, dispatch } = useAuth(); // Obtén el estado de autenticación

  return (
    <div className="header">
      <div className="container">
        {showCartLink && (
          <div className="flota-carrito">
            <div className="card3">
              <Link to="/carrito" className="nav-link carrito-link">
                <i className="bi bi-cart"></i> <hr />
                <span className="card2">{cart.length}</span>
                <hr /> Productos en el carrito
              </Link>
            </div>
          </div>
        )}

        <header className="encabezado">
          <div className="header-bottom">
            <img
              src="/img/02-logos/puchulitamusicainfantil1.png"
              alt="Logo"
              className="logo textoMovimiento"
            />

            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-bs-target="#navbarNavAltMarkup"
                  data-bs-toggle="collapse"
                  type="button"
                >
                  <span className="navbar-toggler-icon" />
                  <img
                    alt="icono"
                    className="container-fluid menu-logo"
                    src="/img/05-img-costados-larga/2.png"
                  />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav tituloImportante3">
                    <Link className="nav-link menu-link" to="/">
                      Home
                    </Link>
                    <Link className="nav-link menu-link" to="/contacto">
                      Contacto
                    </Link>
                    <Link className="nav-link menu-link" to="/tienda">
                      Tienda
                    </Link>
                    {!state.isAuthenticated ? (
                      <>
                        <Link className="nav-link menu-link" to="/login">
                          <i className="bi bi-box-arrow-in-right"></i>
                        </Link>
                        <Link className="nav-link menu-link" to="/register">
                        <i class="bi bi-filter-square"></i>
                        </Link>
                      </>
                    ) : (
                      <Link
                        className="nav-link menu-link"
                        to="/logout"
                        onClick={() => dispatch({ type: "LOGOUT" })}
                      >
                        <i className="bi bi-box-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {showSearchBar && (
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar productos, marcas y más..."
                className="search-bar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button btn">
                <i className="bi bi-shift-fill"></i>
              </button>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
