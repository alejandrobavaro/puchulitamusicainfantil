import React from 'react';
import '../assets/scss/_03-Componentes/_Tienda.scss';

function MiniCarrito({ items }) {
  return (
    <div className="mini-carrito">
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TiendaMiniCarrito;
