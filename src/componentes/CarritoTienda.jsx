import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/estilo.scss";

const CarritoTienda = ({ cart }) => {
  // Calcula el total del carrito
  const total = cart.reduce((sum, product) => sum + product.precio, 0);

  return (
    <div className="mini-carrito compacto">
      <div className="flota-carrito-izquierda">
       

        <Link to="/carrito" className="link-carrito">
      
          <div>
            <section className="tituloPrecioCarrito card2"> ${total.toFixed(2)} </section>
          </div>
        
          <hr />
          <h2 className="tituloImportante4"> A Pagar</h2>
        </Link>
    

      </div>
      <div className="objetoCentrado1">
        <button className="btn botonComprar">
          <h3 className="tituloImportante1 textoMovimiento">
            <i className="bi bi-paypal"></i> Comprar
          </h3>
        </button>
      </div>
    </div>
  );
};

export default CarritoTienda;
