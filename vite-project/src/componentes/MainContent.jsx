import React from 'react';
import { useState } from 'react';
import '../assets/scss/estilo.scss'; 


function MainContent () {
  const [count, setCount] = useState(0)

  return (
    <>

      

<div>
  <main>
    <div className="objetoCentrado1">
      <img
        alt="imagen"
        className="container-fluid"
        src="../assets/img/04-img-banners/bannerheader1.jpg"
      />
    </div>
    <div className="objetoCentrado1">
      <img
        alt="imagen"
        className="container-fluid imagen-limitada3"
        src="../assets/img/02-logos/logo1.png"
      />
    </div>
    <hr className="border border-1 opacity-2" />
    <div className="gridPadre">
      <div className="objetoCentrado1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia in sapiente accusantium, dolor repellat ad eius at et expedita distinctio, voluptatum deserunt quasi. Quis quasi suscipit nobis possimus! Modi.
        </p>
      </div>
      <div>
        <h1 className="h1Titulo textoCentrado1 textoMovimiento">
          <i className="bi bi-person-arms-up">
            {' '}TITULO{' '}
            <i className="bi bi-person-arms-up">
            </i>
          </i>
        </h1>
        <i className="bi bi-person-arms-up">
          <i className="bi bi-person-arms-up">
            <img
              alt="imagen"
              className="container-fluid imagen-limitada1 objetoCentrado1"
              src="../assets/img/02-logos/logo1.png"
            />
          </i>
        </i>
      </div>
      <i className="bi bi-person-arms-up">
        <i className="bi bi-person-arms-up">
          <div className="objetoCentrado1">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, fugiat vel ipsam alias expedita odit quisquam impedit libero officia nam commodi sit, hic, sequi odio. Nulla veritatis quo dicta aut.
            </p>
          </div>
        </i>
      </i>
    </div>
    <i className="bi bi-person-arms-up">
      <i className="bi bi-person-arms-up">
        <hr className="border border-1 opacity-2" />
        <div className="objetoCentrado1">
          <p>
            <i className="bi bi-person-arms-up">
              {' '}TEXTO{' '}
              <i className="bi bi-person-arms-up">
              </i>
            </i>
          </p>
          <i className="bi bi-person-arms-up">
            <i className="bi bi-person-arms-up">
            </i>
          </i>
        </div>
        <i className="bi bi-person-arms-up">
          <i className="bi bi-person-arms-up">
            <hr className="border border-1 opacity-2" />
            <div className="container text-center imagen-limitada2">
              <div className="col">
                <div
                  className="carousel slide"
                  data-bs-ride="carousel"
                  id="carouselExampleAutoplaying"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        alt="carrusel1"
                        className="container-fluid imagen-limitada2"
                        src="../assets/img/04-img-banners/banner1.png"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        alt="carrusel2"
                        className="container-fluid imagen-limitada2"
                        src="../assets/img/04-img-banners/banner2.png"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        alt="carrusel3"
                        className="container-fluid imagen-limitada2"
                        src="../assets/img/04-img-banners/banner3.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </i>
        </i>
      </i>
    </i>
  </main>
  <i className="bi bi-person-arms-up">
    <i className="bi bi-person-arms-up">
      <i className="bi bi-person-arms-up">
        <p id="telefonoWhattsapp">
          <a
            href="https://api.whatsapp.com/send?phone=..............&text=Hola!,%20en%20que%20puedo%20ayudarte?"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="imgwhattsapp1"
              className="logoWhats textoMovimiento"
              src="../assets/img/02-logos/logowhattsapp1.png"
            />
          </a>
        </p>
      </i>
    </i>
  </i>
</div>





    </>
  );
}

export default MainContent;
