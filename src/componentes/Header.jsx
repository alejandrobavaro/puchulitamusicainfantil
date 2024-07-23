import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./SesionAuthContext"; // Importa el hook useAuth para obtener el estado de autenticación

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
            <div>
            <img
              src="/img/02-logos/puchulitamusicainfantil1.png"
              alt="Logo"
              className="logo imagen-publicidad2"
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
                  <img
                    className="imagen-limitada2 imagen-publicidad2"
                    src="/img/02-logos/puchulitamusicainfantil1.png"
                    alt=""
                  />
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav tituloImportante3">
                    <Link className="nav-link menu-link" to="/">
                      Home
                    </Link>
                  
                    <Link className="nav-link menu-link" to="/tienda">
                      Tienda
                    </Link>

                    <Link className="nav-link menu-link" to="/contacto">
                      Contacto
                    </Link>
                   
                    <Link className="nav-link menu-link" to="/musica">
  Música
  <span className="index-text"> (en construcción) </span>
</Link>



                    {!state.isAuthenticated ? (
                      <>
                        <Link className="nav-link menu-link" to="/login">
                          <p>
                            {" "}
                            Inicia Sesión -
                            <i className="bi bi-box-arrow-in-right"></i>
                          </p>
                        </Link>
                        <Link className="nav-link menu-link" to="/register">
                          <p>
                            {" "}
                            Registrate -<i className="bi bi-filter-square"></i>
                          </p>
                        </Link>
                      </>
                    ) : (
                      <Link
                        className="nav-link menu-link"
                        to="/logout"
                        onClick={() => dispatch({ type: "LOGOUT" })}
                      >
                        <p>
                          {" "}
                          Cerrá Sesión -
                          <i className="bi bi-box-arrow-right"></i>
                        </p>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </nav>
            </div>
          </div>

          {showSearchBar && (
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar productos por categoría"
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
