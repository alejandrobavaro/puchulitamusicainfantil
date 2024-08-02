import React from "react";
import '../assets/scss/_03-Componentes/_Tienda.scss';

const TiendaDetalleProducto = ({ detalle }) => {
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

export default TiendaDetalleProducto;
