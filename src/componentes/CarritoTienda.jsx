import React from 'react';
import '../assets/scss/estilo.scss';

const CarritoTienda = ({ cart }) => {
  // Calcula el total del carrito
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <> 
    {/* TITULO */}
<section className="objetoCentrado1">
        <h1 className="tituloImportante2 textoMovimiento">
          <i className="bi bi-cart" /> TIENDA - PAGOS <i className="bi bi-cart" />
        </h1>
      </section>

   
         {/*-------------------TITULO 1 - TIENDA---------------------------*/}
    <section className="objetoCentrado1">
      <h1 className="tituloImportante4 textoMovimiento">
        CARRITO DE COMPRAS{" "}
        <i className="bi bi-cart" />
      </h1>
    </section>
 

    <div className='gridPadreCarrito4 objetoCentrado1'>
  
      {/* CARRITO PARA PAGO CON RESUMEN COMPRA */}
      <div className="col">
        <h3 className="objetoCentrado1 tituloImportante3">
          RESUMEN DE LA COMPRA:
        </h3>
        <section className="objetoCentrado1">
          <h4 className="item tituloImportante2">
            <i className="bi bi-activity" /> REALIZA TU PAGO <i className="bi bi-activity" />
          </h4>
        </section>
  

    {/*-------------------CARRITO DE COMPRAS - TIENDA---------------------------*/}
    <div className="col">
      <div className="card-container">
        <div className="mini-carrito tituloImportante1">
          <div className="objetoCentrado1">
            <p className="tituloImportante3 objetoCentrado1">
              {" "}
              Carrito
              <span className="card3">
                {" "}
                <i className="bi bi-cart tamañoicono1" />{" "}
              </span>
            </p>
          </div>
          <div className="mini-carrito2">
            {/* Contenedor para los productos en filas */}
            <div className="row" id="contenedorProductos">
              {/* Aquí se insertarán los productos */}
            </div>
            <ul
              id="listaMiniCarrito"
              className="listaMiniCarrito3 list-group-flush"
            />
            <p
              id="totalMiniCarrito"
              className="tituloImportante2 objetoCentrado1"
            >
              Total: $0.00
            </p>
            <p
              id="contadorCarrito"
              className="totalImportante1 objetoCentrado1"
            >
              Cantidad de Productos: 0
            </p>
            <div className="objetoCentrado1">
              {/* Botón para redirigir a la página de pagos (tienda-pago.html) */}
              <div className="objetoCentrado1">
                <button
                  className="btn botonSecundario botonComprar"
                  id="btnComprar"
                >
                  <a href="tienda-pago.html" id="btnComprar">
                    <i className="bi bi-shift-fill" /> COMPRAR{" "}
                    <i className="bi bi-shift-fill" />
                  </a>
                </button>
              </div>
              <button
                className="btn botonSecundario botonEliminar"
                id="btnVaciarCarrito"
              >
                <i className="bi bi-shift-fill" /> VACIAR CARRITO{" "}
                <i className="bi bi-shift-fill" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/*------------------------------------------------------------------*/}
    <hr className="border border-0 opacity-20" />

    <div className="card-container">
          <div className="mini-carrito tituloImportante1">
            <div className="objetoCentrado1" id="resumenCarrito">
              <ul id="listaCarrito" className="list-group mb-3">
                {cart.map((product, index) => (
                  <li key={index} className="list-group-item">
                    {product.name} - ${product.price.toFixed(2)}
                  </li>
                ))}
                <p id="totalCarrito" className="fs-4">
                  Total: ${total.toFixed(2)}
                </p>
              </ul>
            </div>
          </div>
        </div>



      </div>
      <hr className="border border-1 opacity-20" />

      {/* Botón para realizar el pago */}
      <div className="objetoCentrado1">
        <button id="btnPagar" className="btn btn-success">
          <h3 className="tituloImportante2 textoMovimiento">
            <i className="bi bi-shift-fill" /> PAGAR
          </h3>
        </button>
      </div>

      {/* -------------LINK SEGUIR COMPRANDO------------------ */}
      <hr className="border border-2 opacity-50" />
      {/* Botón para seguir comprando */}
      <div className="objetoCentrado1">
        <button className="botonSeguirComprando1">
          <a href="./tienda.html">
            <h3 className="tituloImportante2">
              <i className="bi bi-shift-fill" /> SEGUIR COMPRANDO <i className="bi bi-shift-fill" />
            </h3>
          </a>
        </button>
      </div>
      </div>
    </>
  );
}

export default CarritoTienda;
