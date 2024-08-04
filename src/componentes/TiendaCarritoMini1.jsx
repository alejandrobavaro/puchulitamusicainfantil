// src/componentes/TiendaCarritoMini1.jsx
import React from 'react';
import '../assets/scss/_03-Componentes/_TiendaCarritoMini1.scss'; // Verifica esta ruta

function TiendaCarritoMini1({ items }) {
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

export default TiendaCarritoMini1;
