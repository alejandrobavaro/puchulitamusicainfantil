import React from 'react';
import PropTypes from 'prop-types';
import MusicaReproductorCard from './MusicaReproductorCard';

function MusicaReproductor({ cart, removeFromCart, clearCart }) {
  return (
    <div className="reproductor-musica">
      <h2>Reproductor de Música</h2>
      <button onClick={clearCart} className="clear-cart-btn">
        Vaciar Lista de Reproducción
      </button>
      {cart.map((song) => (
        <MusicaReproductorCard
          key={song.id}
          song={song}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

MusicaReproductor.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default MusicaReproductor;
