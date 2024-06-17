import React from 'react';
import '../assets/scss/estilo.scss';

function Header() {
  return (
    <header className="encabezado">
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
              src="../../public/img/05-img-costados-larga/16aicono.png"
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a aria-current="page" className="nav-link menu-link" href="#">
                Home
              </a>
              <a className="nav-link menu-link" href="#">
                Contacto
              </a>
              <a className="nav-link menu-link" href="#">
                Tienda
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
