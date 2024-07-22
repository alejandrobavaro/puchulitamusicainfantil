import React from 'react';
import PropTypes from 'prop-types';
import CancionCard from './CancionCard';

function CancionesLista({ songs, addToCart, playPreview }) {
  return (
    <div className="canciones-lista">
      {songs.map((cancion) => (
        <CancionCard
          key={cancion.id}
          cancion={cancion}
          addToCart={addToCart}
          playPreview={playPreview}
        />
      ))}
    </div>
  );
}

CancionesLista.propTypes = {
  songs: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  playPreview: PropTypes.func.isRequired,
};

export default CancionesLista;
