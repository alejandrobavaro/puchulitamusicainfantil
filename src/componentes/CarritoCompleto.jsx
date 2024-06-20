import React from "react";
import "../assets/scss/estilo.scss";

const CarritoCompleto = ({ cart, removeFromCart, handlePagar }) => {
  // Calcula el total del carrito
  const total = cart.reduce((sum, product) => sum + product.precio, 0);

  return (
    <>
      {/* TITULO */}
      <section className="objetoCentrado1">
        <h1 className="tituloImportante2 textoMovimiento">
          <i className="bi bi-cart" /> CARRITO DE COMPRAS{" "}
          <i className="bi bi-cart" />
        </h1>
      </section>

      <div className="gridPadreCarrito4 objetoCentrado1">
        {/* CARRITO PARA PAGO CON RESUMEN COMPRA */}
        <div className="col">
          <h3 className="objetoCentrado1 tituloImportante3">
            RESUMEN DE LA COMPRA:
          </h3>
          <section className="objetoCentrado1">
            <h4 className="item tituloImportante2">
              <i className="bi bi-activity" /> REALIZA TU PAGO{" "}
              <i className="bi bi-activity" />
            </h4>
          </section>

          {/*-------------------CARRITO DE COMPRAS - TIENDA---------------------------*/}
          <div className="col">
            <div className="card-container">
              <div className="tituloImportante1">
                <div className="objetoCentrado1">
                  <p className="tituloImportante3 objetoCentrado1">
                    Total: ${total.toFixed(2)}
                  </p>
                  <p className="totalImportante1 objetoCentrado1">
                    Cantidad de Productos: {cart.length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border border-0 opacity-20" />

          <div className="card-container gridPadre">
            <div className="tituloImportante1">
              <div className="objetoCentrado1" id="resumenCarrito">
                <ul id="listaCarrito" className="list-group mb-3">
                  {cart.map((product, index) => (
                    <li key={index} className="list-group-item">
                      <img
                        src={product.imagen}
                        alt={product.nombre}
                        className="img-thumbnail"
                        width="50"
                        height="50"
                      />
                      {product.nombre} - ${product.precio.toFixed(2)}
                      <button
                        className="btn-eliminar btn btn-sm ms-2"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </li>
                  ))}
                  <p id="totalCarrito" className="fs-4">
                    Total: ${total.toFixed(2)}
                  </p>
                </ul>
              </div>

              <section className="objetoCostadoDerecho1">
                <button
                  className="btn botonSecundario btnVaciarCarrito"
                  id="btnVaciarCarrito"
                  onClick={() => removeFromCart(null)}
                >
                  <i className="bi bi-shift-fill" /> VACIAR CARRITO{" "}
                  <i className="bi bi-shift-fill" />
                </button>
              </section>
              
            </div>
          </div>
        </div>

        <hr className="border border-1 opacity-20" />

        <button onClick={handlePagar} className="btn botonComprar">
          <h3 className="tituloImportante1 textoMovimiento">
            <i className="bi bi-paypal"></i> Comprar
          </h3>
        </button>
      </div>
    </>
  );
};

export default CarritoCompleto;
