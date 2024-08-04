import React from "react";
import Swal from "sweetalert2";
import '../assets/scss/_03-Componentes/_TiendaCarritoCompra.scss'; 
import '../assets/scss/_01-General/_SweetAlert.scss'; 

const TiendaCarritoCompra = ({ cart = [], removeFromCart, handlePagar }) => {
  const total = cart.reduce((sum, product) => sum + (product.precio || 0), 0);

  const handleComprar = () => {
    handlePagar();
    Swal.fire({
      title: 'Compra realizada!',
      text: 'Tu compra ha sido procesada exitosamente.',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'sweetalert-popup',
        title: 'sweetalert-title',
        confirmButton: 'sweetalert-button',
      }
    });
  };

  return (
    <div className="carrito-container">
      {/* TITULO */}
      <section className="titulo-container">
        <h1 className="titulo">
          <i className="bi bi-cart" /> CARRITO DE COMPRAS <i className="bi bi-cart" />
        </h1>
      </section>

      <div className="carrito-content">
        {/* RESUMEN DE COMPRA */}
        <div className="resumen-compra">
          <h3 className="resumen-titulo">RESUMEN DE LA COMPRA:</h3>
          <section className="pago-section">
            <h4 className="pago-titulo">
              <i className="bi bi-activity" /> REALIZA TU PAGO <i className="bi bi-activity" />
            </h4>
          </section>

          {/* CARRITO DE COMPRAS */}
          <div className="carrito-detalle">
            <div className="resumen-info">
              <p className="total-text">
                Total: ${total.toFixed(2)}
              </p>
              <p className="cantidad-text">
                Cantidad de Productos: {cart.length}
              </p>
            </div>

            <hr className="divider" />

            <ul className="producto-list">
              {cart.map((product, index) => (
                <li key={index} className="producto-item">
                  <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="producto-imagen"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "path/to/default/image.jpg"; // Ruta de la imagen por defecto
                    }}
                  />
                  <span className="producto-nombre">{product.nombre}</span>
                  <span className="producto-precio">${(product.precio || 0).toFixed(2)}</span>
                  <button
                    className="btn-eliminar"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </li>
              ))}
              <p className="total-carrito">
                Total: ${total.toFixed(2)}
              </p>
            </ul>

            <section className="acciones">
              <button
                className="btn btnVaciarCarrito"
                onClick={() => removeFromCart(null)}
              >
                <i className="bi bi-shift-fill" /> VACIAR CARRITO <i className="bi bi-shift-fill" />
              </button>
            </section>
          </div>
        </div>

        <hr className="divider" />

        <button onClick={handleComprar} className="btn botonComprar">
          <h3 className="compra-text">
            <i className="bi bi-paypal"></i> Comprar
          </h3>
        </button>
      </div>
    </div>
  );
};

export default TiendaCarritoCompra;
