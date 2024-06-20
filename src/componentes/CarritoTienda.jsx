import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/estilo.scss";

const CarritoTienda = ({ cart }) => {
  // Calcula el total del carrito
  const total = cart.reduce((sum, product) => sum + product.precio, 0);

  return (
    <div className="mini-carrito compacto">
      <Link to="/carrito" className="link-carrito">
        <hr />

        <p className="tituloImportante2 objetoCentrado1">
          Total: ${total.toFixed(2)} <i className="bi bi-cart"></i> (
          {cart.length})
        </p>
        <div className="objetoCentrado1">
        <button className="btn botonComprar ">
          <h3 className="tituloImportante1 textoMovimiento">
            <i className="bi bi-paypal"></i> Comprar
          </h3>
        </button>
        </div>
      </Link>
    </div>
  );
};

export default CarritoTienda;
