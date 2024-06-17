import React from 'react';

const DetalleProducto = ({ producto }) => {
  if (!producto) return null;

  return (
    <div id="detalleProductoAgregado">
      <div className="card">
        <img src={producto.imagen} className="card-img-top img-fluid" alt={producto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Color: {producto.color}</p>
          <p className="card-text">Talla: {producto.talla}</p>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
