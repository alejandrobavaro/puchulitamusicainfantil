import React from 'react';
import PropTypes from 'prop-types';
import { PlusCircle } from 'react-bootstrap-icons';
import '../assets/scss/_03-Componentes/_MusicaCancionCard.scss';

function MusicaCancionCard({ cancion, addToCart }) {
  return (
    <div className="cancion-card-musica">
      <img src={cancion.imagen} alt={cancion.nombre} className="cancion-imagen-musica" />
      <div className="cancion-info-musica">
        <div className="info-item"><strong>Nombre:</strong> {cancion.nombre}</div>
        <div className="info-item"><strong>Disco:</strong> {cancion.artista}</div>
        <div className="info-item"><strong>Género:</strong> {cancion.categoria}</div>
        <div className="info-item"><strong>Duración:</strong> {cancion.duracion}</div>
        <button onClick={() => addToCart(cancion)} title="Add to Playlist" className="add-to-playlist-btn">
          <PlusCircle />
        </button>
      </div>
    </div>
  );
}

MusicaCancionCard.propTypes = {
  cancion: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default MusicaCancionCard;
