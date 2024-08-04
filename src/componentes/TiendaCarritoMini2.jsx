// src/componentes/TiendaCarritoMini2.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../assets/scss/_03-Componentes/_TiendaCarritoMini2.scss'; // Verifica esta ruta

const TiendaCarritoMini2 = ({ cart, removeFromCart, clearCart }) => {
  const location = useLocation();
  const total = cart.reduce((sum, product) => sum + product.precio, 0);
  const showLeftCartLink = location.pathname.startsWith("/tienda");

  return (
    <div className="mini-carrito compacto">
      {showLeftCartLink && (
        <div className="flota-carrito-izquierda">
          <Link to="/carrito" className="link-carrito">
            <h6 className="texto-carrito">A Pagar</h6>
            <div>
              <section className="tituloPrecioCarrito">
                ${total.toFixed(2)}
              </section>
            </div>

            <div className="objetoCentrado1">
              <button className="botonComprar1" onClick={() => alert("Compra realizada")}>
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

export default TiendaCarritoMini2;
