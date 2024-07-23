import React from "react";

const DetalleProducto = ({ detalle }) => {
  if (!detalle) return null;

  return (
    <div>
      <h4>Detalle del Producto:</h4>
      <p><strong>Nombre:</strong> {detalle.nombre}</p>
      <p><strong>Precio:</strong> ${detalle.precio.toFixed(2)}</p>
      <p><strong>Color:</strong> {detalle.color}</p>
      <p><strong>Talla:</strong> {detalle.talla}</p>
    </div>
  );
};

export default DetalleProducto;
