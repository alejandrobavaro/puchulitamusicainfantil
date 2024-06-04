import React from 'react';
import { useState } from 'react';
import '../assets/scss/estilo.scss'; 


function Footer () {
  const [count, setCount] = useState(0)

  return (
    <>
     


     <div>

  <footer className="gridPadre">
    <div className="footerElements">
      <div className="img1Footer">
 
      </div>
      <div className="linksFooter">
        <div className="textoMovimiento">
          <a
            href="#"
            target="_blank"
          >
            <i className="bi bi-instagram" />
            {' '}Instagram
            <i className="bi bi-instagram" />
          </a>
        </div>
        <div className="textoMovimiento">
          <a
            href="#"
            target="_blank"
          >
            <i className="bi bi-youtube" />
            {' '}Canal de Youtube
            <i className="bi bi-youtube" />
          </a>
        </div>
        <div className="textoMovimiento">
          <a
            href="#"
            target="_blank"
          >
            <i className="bi bi-facebook" />
            {' '}Facebook
            <i className="bi bi-facebook" />
          </a>
        </div>
        <div className="textoMovimiento">
          <a
            href="#"
            target="_blank"
          >
            <i className="bi bi-twitter" />
            {' '}X (Twitter)
            <i className="bi bi-twitter-x" />
          </a>
        </div>
        <h6 className="tituloPequeño4">
          <i className="bi bi-person-arms-up" />
          {' '}Desarrollo Gondra World Dev{' '}
          <i className="bi bi-person-arms-up" />
        </h6>
      </div>
 
    </div>
  </footer>
</div>




    </>
  )
}

export default Footer
