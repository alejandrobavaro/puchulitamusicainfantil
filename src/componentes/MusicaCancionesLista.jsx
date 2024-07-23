import React from 'react';
import PropTypes from 'prop-types';
import MusicaCancionCard from './MusicaCancionCard';

function MusicaCancionesLista({ songs, addToCart }) {
  return (
    <div className="canciones-lista">
      {songs.map((cancion) => (
        <MusicaCancionCard
          key={cancion.id}
          cancion={cancion}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

MusicaCancionesLista.propTypes = {
  songs: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default MusicaCancionesLista;
