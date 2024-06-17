import React from 'react';

const MiniCarrito = ({ carrito, onEliminar }) => {
  const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);

  return (
    <div>
      <ul id="listaMiniCarrito">
        {carrito.map((producto, index) => (
          <li key={index} className="estilo-lista" data-id={producto.id}>
            <div className="d-flex align-items-center">
              <img src={producto.imagen} className="me-3" alt={producto.nombre} style={{ maxWidth: '60px' }} />
              <div>
                <h6 className="mb-0 tituloPequeño4">{producto.nombre}</h6>
                <small className="text-muted1">Color: {producto.color}, Talla: {producto.talla}</small>
              </div>
            </div>
            <div className="objetoCostadoDerecho1">
              <span className="badge card2 rounded-pill tituloImportante1">${producto.precio.toFixed(2)}</span>
              <button className="btn-eliminar btn btn-sm ms-2 seguirComprando1" onClick={() => onEliminar(producto.id)}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div id="totalMiniCarrito">Total: ${total.toFixed(2)}</div>
      <div id="contadorCarrito">Cantidad de Productos: {carrito.length}</div>
      <button id="btnVaciarCarrito" onClick={() => onEliminar(null)}>Vaciar Carrito</button>
    </div>
  );
};

export default MiniCarrito;
