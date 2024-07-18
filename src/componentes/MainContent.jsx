import React, { useState } from "react";
import "../assets/scss/estilo.scss";

function MainContent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <main>
          <div className="gridPadre1">
            <div className="objetoCentrado1">
              <a href="#">
                <img
                  alt="icono"
               className='imagen-limitada3 imagen-publicidad1'
                  src="/img/05-img-costados-larga/4.png"
                />
              </a>
              <img
                alt="imagen"
          className='imagen-limitada3 imagen-publicidad1'
                src="/img/02-logos/puchulitamusicainfantil1.png"
              />
              <a href="#">
                <img
                  alt="icono"
               className='imagen-limitada3 imagen-publicidad1'
                  src="/img/05-img-costados-larga/3.png"
                />
              </a>
            </div>
          </div>

          <div className="gridPadre">
            {/* <div className="objetoCentrado1"> <a href="#"> <img className='imagen-limitada3 imagen-publicidad objetoCentrado1' src="/img/05-img-costados-larga/1a.png" alt="" /> </a> </div> */}

            <div className="objetoCentrado1">
              <a href="#">
                <img
                 className='imagen-publicidad2 objetoCentrado1'
                  src="/img/05-img-costados-larga/0a.png"
                  alt=""
                />
              </a>
            </div>



            {/* <div className="objetoCentrado1">
              <a href="#">
                <img
                  alt="icono"
                 className='imagen-limitada3 imagen-publicidad objetoCentrado1'
                  src="/img/05-img-costados-larga/16aicono.png"
                />
              </a>
            </div> */}

       

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
