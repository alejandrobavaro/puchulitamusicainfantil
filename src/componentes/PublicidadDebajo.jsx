import React from 'react';
import { useState } from 'react';
import '../assets/scss/estilo.scss'; 


function PublicidadDebajo () {
  const [count, setCount] = useState(0)

  return (
    <>
<>
<>
  {/*--------CARRUSELL PUBLICIDAD ANTES DEL FOOTER ABAJO----------*/}
  <hr className="border border border-1 opacity-2" />
  <div className="container text-center imagen-limitada2">
    <div className="col">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="container-fluid imagen-limitada2"
              src="../img/04-img-banners/banner1.png"
              alt="carrusel1"
            />
          </div>
          <div className="carousel-item">
            <img
              className="container-fluid imagen-limitada2"
              src="../img/04-img-banners/banner2.png"
              alt="carrusel2"
            />
          </div>
          <div className="carousel-item">
            <img
              className="container-fluid imagen-limitada2"
              src="../img/04-img-banners/banner3.png"
              alt="carrusel3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-------------------------FIN CARRUSELL-----------------------------------*/}
  {/*-----------------------------------------------------------------------*/}
</>

</>


    </>
  )
}

export default PublicidadDebajo;
