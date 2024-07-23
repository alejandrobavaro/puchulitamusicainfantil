import React from 'react';
import PropTypes from 'prop-types';
import { Trash } from 'react-bootstrap-icons';

function MusicaReproductorCard({ song, removeFromCart }) {
  return (
    <div className="reproductor-musica-card">
      <div className="song-info">
        <p><strong>Nombre de canción:</strong> {song.nombre}</p>
        <p><strong>Disco:</strong> {song.artista}</p>
        <p><strong>Categoría o Género Musical:</strong> {song.categoria}</p>
        <p><strong>Tiempo de duración:</strong> {song.duracion}</p>
      </div>
      <button onClick={() => removeFromCart(song.id)} className="remove-song-btn">
        <Trash />
      </button>
    </div>
  );
}

MusicaReproductorCard.propTypes = {
  song: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default MusicaReproductorCard;
