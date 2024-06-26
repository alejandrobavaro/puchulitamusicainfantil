import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/scss/estilo.scss";

const Header = ({ cart, onSearch }) => {
  const location = useLocation();
  const showCartLink = location.pathname.startsWith("/tienda");
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchInput);
  };

  return (
    <div className="header">
      <div className="container">
        {showCartLink && (
          <div className="flota-carrito">
            <div className="card3">
              <Link to="/carrito" className="nav-link carrito-link">
                <i className="bi bi-cart"></i> <hr />{" "}
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
                    src="/img/05-img-costados-larga/16aicono.png"
                  />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <Link className="nav-link menu-link" to="/">
                      Home
                    </Link>
                    <Link className="nav-link menu-link" to="/contacto">
                      Contacto
                    </Link>
                    <Link className="nav-link menu-link" to="/tienda">
                      Tienda
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
              className="search-bar"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button className="search-button btn" onClick={handleSearchSubmit}>
              <i className="bi bi-shift-fill"></i>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
