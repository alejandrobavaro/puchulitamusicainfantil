import React from 'react';
import { useState } from 'react';
import '../assets/scss/estilo.scss'; 


function Header () {
  const [count, setCount] = useState(0)

  return (
    <>

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
            alt="Logo"
            className="menu-logo"
            src="../public/img/02-logos/logoheader1.png"
          />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <div className="imagenHeader1">
              <a href="./index.html">
                {/* <img
                  alt="."
                  className="container-fluid menu-logo"
                  src="../"
                /> */}
              </a>
            </div>
            <a
              aria-current="page"
              className="nav-link menu-link"
              href="./index.html"
            >
              Home
            </a>
            <a
              className="nav-link menu-link"
              href="./pages/contacto.html"
            >
              Contacto
            </a>
            <a
              className="nav-link menu-link"
              href="./pages/tienda.html"
            >
              Tienda
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>


    </>
  )
}

export default Header
