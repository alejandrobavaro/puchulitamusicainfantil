import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productos from "../../public/productos.json";

const MusicaPublicidadSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="publicidad-carousel1 ">
      <Slider {...settings}>
        {productos.map((producto) => (
          <div key={producto.id} className="slide-item">
            <img
              src={producto.imagenes[0]}
              alt={producto.nombre}
              className="imagen-publicidad5 objetoCentrado1"
            />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {productos.map((producto) => (
          <div key={producto.id} className="slide-item">
            <img
              src={producto.imagenes[0]}
              alt={producto.nombre}
              className="imagen-publicidad5 objetoCentrado1"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MusicaPublicidadSlider;
