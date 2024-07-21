import React from 'react';
import PropTypes from 'prop-types';

function CancionCard({ cancion, addToCart }) {
  return (
    <div className="cancion-card ">
      <h3>{cancion.nombre}</h3>
      <p>{cancion.artista}</p>
      <button onClick={() => addToCart(cancion)}>Añadir a la lista de reproducción</button>
    </div>
  );
}

CancionCard.propTypes = {
  cancion: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CancionCard;
