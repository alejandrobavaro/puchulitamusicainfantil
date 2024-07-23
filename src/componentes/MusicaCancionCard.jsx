import React from 'react';
import PropTypes from 'prop-types';
import { PlusCircle } from 'react-bootstrap-icons';

function CancionCard({ cancion, addToCart }) {
  return (
    <div className="cancion-card">
      <img src={cancion.imagen} alt={cancion.nombre} className="cancion-imagen" />
      <div className="cancion-info">
        <p><strong>Nombre de canción:</strong> {cancion.nombre}</p>
        <p><strong>Disco:</strong> {cancion.artista}</p>
        <p><strong>Categoría o Género Musical:</strong> {cancion.categoria}</p>
        <p><strong>Tiempo de duración:</strong> {cancion.duracion}</p>
      </div>
      <button onClick={() => addToCart(cancion)} title="Add to Playlist">
        <PlusCircle />
      </button>
    </div>
  );
}

CancionCard.propTypes = {
  cancion: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CancionCard;
