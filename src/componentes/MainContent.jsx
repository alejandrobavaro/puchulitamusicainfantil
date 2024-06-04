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
        className="container-fluid imagen-limitada3"
        src="../public/img/02-logos/puchulitamusicainfantil1.png"
      />
    </div>
   
    <div className="gridPadre">
      <div className="objetoCentrado1">
        <p>
          Aquí podrás escuchar nuestras canciónes! Somos un grupo de músicos que nos divertimos componiendo canciones! Gracias por visitarnos! Música infantil, sin fronteras! Para toda la familia. 
        </p>
      </div>
      <div>
        <h1 className="h1Titulo textoCentrado1 textoMovimiento">
          <i className="bi bi-person-arms-up">
            {' '}UPA LALA{' '}
            <i className="bi bi-person-arms-up">
            </i>
          </i>
        </h1>
    
  
      
      </div>

          <div className="objetoCentrado1">
            <p>
            Canciones divertidas para aprender cantando! Descubrí nuestros canales, y nuestras redes sociales! Buscanos y seguinos para mas contenido! Actualmente estamos trabajando en nuevas canciones para regalarte a vos y a tus hijos! 
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
              src="../public/img/02-logos/logowhattsapp1.png"
            />
          </a>
        </p>
   
</div>





    </>
  );
}

export default MainContent;
