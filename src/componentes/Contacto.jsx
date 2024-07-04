import React from 'react';
import '../assets/scss/estilo.scss';

function Contacto() {
  return (
    <>
      {/* TITULO */}
      <div className="objetoCentrado1">
        <h1 className='estiloContacto2'>CONTACTO</h1>
        
      </div>

    
      
      <div className='gridPadreContacto'>
        {/* DATOS DE CONTACTO */}
        <div className="objetoCentrado1">
          <div>
            <p className="objetoCentrado1 estiloContacto1">
              <a href="https://www.facebook.com/alegondramusic" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook" /> Facebook <i className="bi bi-facebook" />
              </a>
            </p>

            <p className="objetoCentrado1 estiloContacto1">
              <a href="https://www.instagram.com/alegondramusic/?hl=es" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram" /> Instagram <i className="bi bi-instagram" />
              </a>
            </p>

            <p className="objetoCentrado1 estiloContacto1">
              <a href="https://www.youtube.com/channel/UCBhJkysp3SnHU1tR3qAA5pQ" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube" /> Youtube <i className="bi bi-youtube" />
              </a>
            </p>

            <p className="objetoCentrado1 estiloContacto1">
              <a href="https://open.spotify.com/artist/7qo7PxAcvyyyZb6XztH7zE" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-spotify" /> Spotify<i className="bi bi-spotify" />
              </a>
            </p>

            <hr className="border border-1 opacity-5" />

            <p className="objetoCentrado1 estiloContacto1 textoMovimiento">
              <i className="bi bi-envelope objetoCentrado1" />
              <span className="card1">
                Escribinos un mail 
                <a href="mailto:bavaroalejandro@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-person-arms-up" /> <i className="bi bi-person-arms-up" />
                </a>
              </span>
            </p>

            <hr className="border border-1 opacity-5" />

            <p className="objetoCentrado1 estiloContacto1 textoMovimiento">
              <a href="https://api.whatsapp.com/send?phone=2235455451&text=Hola!%20Quisiera,%20contratar%20a%20Almango%20Pop" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-person-arms-up" /> CONTRATACIONES AQUÍ <i className="bi bi-person-arms-up" />
              </a>
            </p>

            <p className="objetoCentrado1 estiloContacto1">
              <a className="logoPaypal" href="https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-paypal" /> COLABORÁ CON NOSOTROS <i className="bi bi-paypal" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <hr className="border border-1 opacity-5" />

      <div className="objetoCentrado1">
      <h2 className='tituloImportante3'> CHILDEN ROCKS </h2>
              </div>

      <hr className="border border-1 opacity-5" />

      {/* FORMULARIO */}
      <div className="contenedorFormulario">
        <form className="estiloFormulario" action="https://formspree.io/f/xbjnlgzz" target="_blank" method="post">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingresa tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" className="form-control" id="telefono" name="telefono" placeholder="Ingresa tu teléfono" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Ingresa tu correo electrónico" required />
          </div>
          <div className="form-group">
            <label htmlFor="asunto">Asunto del Mensaje:</label>
            <input type="text" className="form-control" id="asunto" name="asunto" placeholder="Ingresa el asunto del mensaje" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea className="form-control" id="mensaje" name="mensaje" rows={4} placeholder="Escribe tu mensaje aquí" required />
          </div>
          <div className="text-end">
            <button type="submit" className="btn botonEnviar">ENVIAR</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contacto;
