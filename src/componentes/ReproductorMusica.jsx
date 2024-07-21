import React from 'react';
import PropTypes from 'prop-types';

function ReproductorMusica({ cart, removeFromCart }) {
  return (
    <div className="col card-container">
            <div className="">
    <div className=" reproductor-musica">
      <h2 className='tituloImportante3'>Lista de Reproducción</h2>
      <ul>
        {cart.map((cancion) => (
          <li key={cancion.id}>
            {cancion.nombre} - {cancion.artista}
            <button onClick={() => removeFromCart(cancion.id)}><i className="bi bi-shift-fill" /></button>
          </li>
        ))}
      </ul>
    </div>
    </div>  </div>
  );
}

ReproductorMusica.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ReproductorMusica;
