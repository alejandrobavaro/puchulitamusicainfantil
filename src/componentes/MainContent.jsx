import React from "react";
import { useState } from "react";
import "../assets/scss/estilo.scss";

function MainContent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <main>
          <div className="objetoCentrado1">
            <img
              alt="imagen"
              className="container-fluid imagen-limitada3"
              src="/img/02-logos/puchulitamusicainfantil1.png"
            />
          </div>

          <div className="gridPadre">
            <div className="objetoCentrado1">
              <p>
                <a href="#">
                  <img
                    alt="icono"
                    className="container-fluid objetoCentrado1 imagen-limitada7 textoMovimiento"
                    src="/img/05-img-costados-larga/20.png"
                  />
                </a>
                Aquí podrás escuchar nuestras canciónes! Somos un grupo de
                músicos que nos divertimos componiendo canciones! Gracias por
                visitarnos! Música infantil, sin fronteras! Para toda la
                familia.
              </p>
            </div>
            <div>
              <h1 className="objetoCentrado1 textoMovimiento">
                {" "}
                <img
                  className="container-fluid"
                  src="/img/05-img-costados-larga/1a.png"
                  alt=""
                />{" "}
              </h1>
            </div>

            <div className="objetoCentrado1">
              <p>
                <a href="#">
                  <img
                    alt="icono"
                    className="container-fluid imagen-limitada6 objetoCentrado1 textoMovimiento"
                    src="/img/05-img-costados-larga/16aicono.png"
                  />
                </a>
                Canciones divertidas para aprender cantando! Descubrí nuestros
                canales, y nuestras redes sociales! Buscanos y seguinos para mas
                contenido! Actualmente estamos trabajando en nuevas canciones
                para regalarte a vos y a tus hijos!
              </p>
            </div>
          </div>
        </main>

        <p id="telefonoWhattsapp">
          <a
            href="https://api.whatsapp.com/send?phone=..............&text=Hola!,%20en%20que%20puedo%20ayudarte?"
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
      </div>

     
    </>
  );
}

export default MainContent;
