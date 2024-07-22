import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

function ReproductorMusica({ cart, removeFromCart }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="reproductor-musica">
      <h2 className="tituloImportante3">Reproductor</h2>
      <ul>
        {cart.map((cancion) => (
          <li key={cancion.id}>
            <span>{cancion.nombre} - {cancion.artista}</span>
            <button onClick={() => removeFromCart(cancion.id)} title="Remove from Playlist"><i className="bi bi-trash" /></button>
          </li>
        ))}
      </ul>
      <div className="controls">
        <button onClick={togglePlayPause} title={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button title="Previous"><FaBackward /></button>
        <button title="Next"><FaForward /></button>
      </div>
    </div>
  );
}

ReproductorMusica.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ReproductorMusica;
