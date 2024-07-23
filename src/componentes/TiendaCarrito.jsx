import React from "react";
import { Link, useLocation } from "react-router-dom";


const CarritoTienda = ({ cart }) => {
  const location = useLocation();
  const total = cart.reduce((sum, product) => sum + product.precio, 0);
  const showLeftCartLink = location.pathname.startsWith("/tienda");

  return (
    <div className="mini-carrito compacto">
      {showLeftCartLink && (
        <div className="flota-carrito-izquierda">
          <Link to="/carrito" className="link-carrito">
            <h6> A Pagar </h6>
            <div>
              <section className="tituloPrecioCarrito card2">
                ${total.toFixed(2)}
              </section>
            </div>

            <div className="objetoCentrado1">
              <button className="botonComprar1">
                <h3 className="tituloImportante1 textoMovimiento">
                  <i className="bi bi-shift-fill"></i> Comprar
                </h3>
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CarritoTienda;
