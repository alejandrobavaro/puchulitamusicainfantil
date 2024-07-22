import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { PlusCircle, Play } from 'react-bootstrap-icons'; // Usamos los íconos de react-bootstrap-icons

function CancionCard({ cancion, addToCart }) {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const audioRef = useRef(null);

  const handlePreview = () => {
    if (isPlayingPreview) {
      audioRef.current.pause();
      setIsPlayingPreview(false);
    } else {
      audioRef.current.play();
      setIsPlayingPreview(true);
    }
  };

  return (
    <div className="cancion-card">
      <img src={cancion.imagen} alt={cancion.nombre} className="cancion-imagen" />
      <div className="cancion-info">
        <h3>{cancion.nombre}</h3>
        <p>{cancion.artista}</p>
        <p>{cancion.categoria}</p>
        <p>{cancion.duracion}</p>
      </div>
      <div className="button-group">
        <button onClick={handlePreview} title={isPlayingPreview ? "Stop Preview" : "Play Preview"}>
          <Play />
        </button>
        <button onClick={() => addToCart(cancion)} title="Add to Playlist">
          <PlusCircle />
        </button>
      </div>
      <audio ref={audioRef} src={cancion.url} />
    </div>
  );
}

CancionCard.propTypes = {
  cancion: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CancionCard;
