import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';

function ReproductorMusica({ cart, removeFromCart, clearCart }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.error("Error al reproducir la canción:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.error("Error al reproducir la canción:", error));
      }
    }
  }, [currentTrackIndex]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % cart.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + cart.length) % cart.length);
  };

  const handleClearCart = () => {
    clearCart();
    setIsPlaying(false);
    setCurrentTrackIndex(0);
  };

  const currentTrack = cart[currentTrackIndex];

  return (
    <div className="reproductor-musica">
      <h2 className="tituloImportante3">Reproductor</h2>
      <ul>
        {cart.map((cancion, index) => (
          <li key={cancion.id} className={index === currentTrackIndex ? "active" : ""}>
            <span>{cancion.nombre} - {cancion.artista}</span>
            <button onClick={() => removeFromCart(cancion.id)} title="Remove from Playlist"><i className="bi bi-trash" /></button>
          </li>
        ))}
      </ul>
      <div className="controls">
        <button onClick={handlePrevious} title="Previous"><FaBackward /></button>
        <button onClick={togglePlayPause} title={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={handleNext} title="Next"><FaForward /></button>
        <button onClick={handleClearCart} title="Clear Playlist"><MdClear /></button>
      </div>
      {currentTrack && (
        <audio ref={audioRef} src={currentTrack.url} onEnded={handleNext} />
      )}
    </div>
  );
}

ReproductorMusica.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default ReproductorMusica;
