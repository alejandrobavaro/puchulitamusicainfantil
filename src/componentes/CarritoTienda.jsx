import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/scss/estilo.scss";

const CarritoTienda = ({ cart }) => {
  const location = useLocation();
  const total = cart.reduce((sum, product) => sum + product.precio, 0);
  const showLeftCartLink = location.pathname.startsWith("/tienda");

  return (
    <div className="mini-carrito compacto">
      {showLeftCartLink && (
        <div className="flota-carrito-izquierda">
          <Link to="/carrito" className="link-carrito">
            <i className="bi bi-cart"></i>
            <hr />
            <div>
              <section className="tituloPrecioCarrito card2">
                ${total.toFixed(2)}
              </section>
            </div>
            <hr />

            <h2 className="tituloImportante4">A Pagar</h2>

            <div className="objetoCentrado1">
              <Link to="/carrito" className="link-carrito">
                <button className="btn botonComprar">
                  <h3 className="tituloImportante1 textoMovimiento">
                  Comprar  <i className="bi bi-paypal"></i>
                  </h3>
                </button>
              </Link>
            </div>
          </Link>
          <hr />
        </div>
      )}
    </div>
  );
};

export default CarritoTienda;
