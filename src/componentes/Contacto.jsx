import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Contacto() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        setProductos(productos);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProductos();
  }, []);

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
    <>
      {/* Título */}
      {/* <div className="objetoCentrado1">
        <h1 className="tituloImportante3 textoMovimiento">CONTACTO</h1>
      </div> */}

      <div className="gridPadre">
        <div className="gridPadreContacto">
          <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-publicidad2"
              src="/img/02-logos/puchulitamusicainfantil1.png"
            />
          </a>

          <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-publicidad2"
              src="/img/05-img-costados-larga/0a.png"
            />
          </a>
        </div>

        {/* Datos de Contacto */}

        <div className="objetoCentrado2">
        <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-publicidad2"
              src="/img/05-img-costados-larga/3.png"
            />
          </a>

          <a href="#">
            <img
              alt="icono"
              className="imagen-publicidad imagen-publicidad2"
              src="/img/05-img-costados-larga/20.png"
            />
          </a>

        </div>
        <div className="contact-grid">
          <div className="contact-item">
            <a
              href="https://www.facebook.com/alegondramusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook" /> Facebook{" "}
              <i className="bi bi-facebook" />
            </a>
          </div>

          <div className="contact-item">
            <a
              href="https://www.instagram.com/alegondramusic/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram" /> Instagram{" "}
              <i className="bi bi-instagram" />
            </a>
          </div>

          <div className="contact-item">
            <a
              href="https://www.youtube.com/channel/UCBhJkysp3SnHU1tR3qAA5pQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-youtube" /> YouTube{" "}
              <i className="bi bi-youtube" />
            </a>
          </div>

          <div className="contact-item">
            <a
              href="https://open.spotify.com/artist/7qo7PxAcvyyyZb6XztH7zE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-spotify" /> Spotify{" "}
              <i className="bi bi-spotify" />
            </a>
          </div>

          <div className="contact-item">
            <i className="bi bi-envelope objetoCentrado1" />
            <span className="card1">
              {" "}
              <a
                href="mailto:bavaroalejandro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-person-arms-up" /> Escríbenos un mail{" "}
                <i className="bi bi-person-arms-up" />
              </a>
            </span>
          </div>

          <div className="contact-item">
            <a
              className="logoPaypal"
              href="https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-paypal" /> COLABORA CON NOSOTROS{" "}
              <i className="bi bi-paypal" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border border-1 opacity-5" />

      <div className="gridPadre">
        {/* Formulario con carrusel al lado */}
        <div className="contenedorFormulario">
          <div className="formulario-column">
            <form
              className="estiloFormulario"
              action="https://formspree.io/f/xbjnlgzz"
              target="_blank"
              method="post"
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefono"
                  name="telefono"
                  placeholder="Ingresa tu teléfono"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="asunto">Asunto del Mensaje:</label>
                <input
                  type="text"
                  className="form-control"
                  id="asunto"
                  name="asunto"
                  placeholder="Ingresa el asunto del mensaje"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Escribe tu mensaje aquí"
                  required
                />
              </div>
              <div className="text-end">
                <button type="submit" className="btn botonEnviar">
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
          <div className="carrusel-column">
            <div className="objetoCentrado2">
              <h2 className="tituloImportante3">
                <i className="bi bi-person-arms-up" /> KIDS ROCK{" "}
                <i className="bi bi-person-arms-up" />
              </h2>
            </div>
            <Slider {...settings}>
              {productos.map((producto) => (
                <div key={producto.id}>
                  <img
                    src={producto.imagenes[0]}
                    alt={producto.nombre}
                    className="imagen-publicidad"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <p id="telefonoWhattsapp">
        <a
          href="https://api.whatsapp.com/send?phone=+5492235455451&text=Hola!,%20en%20que%20puedo%20ayudarte?"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="imgwhattsapp1"
            className="logoWhats textoMovimiento"
            src="/img/02-logos/logowhattsapp1.png"
          />
        </a>
      </p>
    </>
  );
}

export default Contacto;
