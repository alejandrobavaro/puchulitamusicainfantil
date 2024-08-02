import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/_03-Componentes/_MusicaReproductorCard.scss';

function MusicaReproductorCard({ song }) {
  return (
    <div className="reproductor-card-musica">
      <img src={song.cover} alt={song.title} className="reproductor-imagen-musica" />
      <div className="reproductor-info-musica">
        <p>{`Nombre de canción: ${song.title}`}</p>
        <p>{`Álbum: ${song.album}`}</p>
        <p>{`Género: ${song.genre}`}</p>
        <p>{`Duración: ${song.duration}`}</p>
      </div>
    </div>
  );
}

MusicaReproductorCard.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired
  }).isRequired,
};

export default MusicaReproductorCard;
