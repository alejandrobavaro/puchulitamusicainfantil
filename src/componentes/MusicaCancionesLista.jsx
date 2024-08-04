import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import MusicaCancionCard from "./MusicaCancionCard";
import "../assets/scss/_03-Componentes/_MusicaCancionesLista.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configuración del slider
const sliderSettings = {
  dots: false,  // No mostrar los puntos de navegación
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,  // Hacer que el slider avance automáticamente
  autoplaySpeed: 3000,  // Velocidad de cambio en milisegundos (3 segundos en este caso)
};

function MusicaCancionesLista({
  songs,
  handleAddToCart,
  handlePlayPreview,
  searchQuery,
  selectedCategory,
  setSelectedCategory,
  productos,
}) {
  const [isPublicidadVisible, setIsPublicidadVisible] = useState(true);

  const filteredSongs = songs.filter(
    (song) =>
      (selectedCategory === "Todos" || song.categoria === selectedCategory) &&
      (song.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artista.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleClosePublicidad = () => {
    setIsPublicidadVisible(false);
  };

  return (
    <div className="musica-grid-container">
      <div className="canciones-lista-musica">
        {filteredSongs.map((song) => (
          <MusicaCancionCard
            key={song.id}
            cancion={song}
            addToCart={handleAddToCart}
            playPreview={handlePlayPreview}
          />
        ))}
      </div>

{/*       
      {isPublicidadVisible && (
        <div className="musica-publicidad">
          <button className="close-btn" onClick={handleClosePublicidad}>
            &times;
          </button>
          <p>SUPER OFERTAS!</p>
          <Slider {...sliderSettings}>
            {productos.map((producto) => (
              <div key={producto.id} className="slide-item">
                <img
                  src={producto.imagenes[0]}
                  alt={producto.nombre}
                  className="imagen-publicidad objetoCentrado1"
                  onError={(e) => (e.target.src = '/public/productos.json')}
                />
              </div>
            ))}
          </Slider>
        </div>
      )} */}


    </div>
  );
}

MusicaCancionesLista.propTypes = {
  songs: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handlePlayPreview: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  productos: PropTypes.array.isRequired,
};

export default MusicaCancionesLista;
