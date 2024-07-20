import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useOfertas } from "./OfertasContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PublicidadDebajo = () => {
  const { ofertas } = useOfertas();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
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
  }, [ofertas]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="publicidad-grid gridPadreProductos ">
      <div className="publicidad-container ">
        <div className="publicidad-carousel ">
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
        <div className="publicidad-carousel">
          <Slider {...settings}>
            {productos.slice().reverse().map((producto) => (<div key={producto.id} className="slide-item">
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
    
        <h2 className="tituloImportante3 objetoCentrado1 textoMovimiento">
          Productos en Oferta! 
        </h2>
      

      <div className="gridPadreProductos1">
             <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-limitada8"
              src="/img/05-img-costados-larga/16aicono.png"
            />
          </a>
          <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-limitada8"
              src="/img/05-img-costados-larga/4.png"
            />
          </a>
          <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-limitada8"
              src="/img/05-img-costados-larga/1a.png"
            />
          </a>
          <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-limitada8"
              src="/img/05-img-costados-larga/0a.png"
            />
          </a>

          <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-limitada8"
              src="/img/05-img-costados-larga/2.png"
            />
          </a>
          <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad
  imagen-limitada8"
              src="/img/05-img-costados-larga/20.png"
            />
          </a>
          <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-limitada8"
              src="/img/05-img-costados-larga/3.png"
            />
          </a>
        </div>
      </div>

  );
};

export default PublicidadDebajo;
