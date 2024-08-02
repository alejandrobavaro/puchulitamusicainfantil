// src/componentes/MainPublicidadSlider.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useOfertas } from "./TiendaOfertasContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/scss/_03-Componentes/_MainPublicidadSlider.scss';

const MainPublicidadSlider = () => {
  const { ofertas } = useOfertas(); // Obtiene las ofertas del contexto
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json"); // Carga los productos desde un archivo JSON
        const productos = await response.json();
        const productosOfertas = productos.filter((producto) =>
          ofertas.includes(producto.id)
        );
        setProductos(productosOfertas);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProductos();
  }, [ofertas]); // Se ejecuta cada vez que cambian las ofertas

  const settings = {
    dots: false, // Oculta los puntos de navegación
    infinite: true, // Hace el slider infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Muestra un slide a la vez
    slidesToScroll: 1, // Desplaza un slide a la vez
    autoplay: true, // Autoplay activado
    autoplaySpeed: 3000, // Velocidad del autoplay
    arrows: true, // Muestra flechas de navegación
  };

  return (
    <div className="gridPadrePublicidad1">
      <div className="publicidad-grid-contenedor">
        <div className="publicidad-grid fila-publicidad">
          <div className="publicidad-container">
            <Slider {...settings}>
              {productos.map((producto) => (
                <div key={producto.id} className="slide-item">
                  <img
                    src={producto.imagenes[0]}
                    alt={producto.nombre}
                    className="imagen-publicidad objetoCentrado1"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="publicidad-container">
            <Slider {...settings}>
              {productos
                .slice()
                .reverse()
                .map((producto) => (
                  <div key={producto.id} className="slide-item">
                    <img
                      src={producto.imagenes[0]}
                      alt={producto.nombre}
                      className="imagen-publicidad objetoCentrado1"
                    />
                  </div>
                ))}
            </Slider>
          </div>
        </div>

        <h3 className="tituloImportante3">OFERTAS EN CAMISETAS</h3>
        <div className="gridPadreProductos1">
          {productos.map((producto) => (
            <img
              key={producto.id}
              src={producto.imagenes[0]}
              alt={producto.nombre}
              className="imagen-limitada8 objetoCentrado1"
            />
          ))}
        </div>
        <hr className="transparent-hr" />
      </div>
    </div>
  );
};

export default MainPublicidadSlider;
