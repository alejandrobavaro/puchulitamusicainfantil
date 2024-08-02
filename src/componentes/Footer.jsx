import React from "react";
import "../assets/scss/_03-Componentes/_Footer.scss"; // Importa los estilos específicos del Footer

function Footer() {
  return (
    <footer className="gridPadreFooter">
      <hr className="dividerFooter" />
      {/* Línea divisoria */}
      <div className="footerContentFooter">
        {/* Contenedor principal del Footer */}
        <div className="ElementsFooter">
          {/* Sección de imágenes y enlaces del Footer */}
          <div className="columnaFooter">
            {/* Imagen y enlace del logo izquierdo */}
            <div className="imgFooter1 imagenPublicidadFooter2">
              <a href="#">
                <img src="/img/02-logos/logoheader1-izquierda.png" alt="" />
              </a>
            </div>
          </div>
          <div className="columnaFooter">
            {/* Contenedor de enlaces a redes sociales y logo central */}
            <div className="linksFooter">
              <div className="textoMovimientoFooter tituloImportanteFooter4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram" /> Instagram
                </a>
              </div>
              <div className="textoMovimientoFooter tituloImportanteFooter4">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-youtube" /> Youtube
                </a>
              </div>
              <div className="textoMovimientoFooter tituloImportanteFooter4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook" /> Facebook
                </a>
              </div>
              <div className="textoMovimientoFooter tituloImportanteFooter4">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter" /> X (Twitter)
                </a>
              </div>
            </div>
          </div>
          <div className="columnaFooter">
            {/* Imagen y enlace del logo derecho */}
            <div className="imgFooter1 imagenPublicidadFooter2">
              <a href="#">
                <img src="/img/02-logos/logoheader2-derecha.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <hr className="dividerFooter" />
        {/* Línea divisoria */}
        <div className="trademarkFooter">
          {/* Sección de derechos de autor */}
          <div className="textoMovimientoFooter tituloImportanteFooter4">
            <h3>
              <a
                href="https://alejandrobavaro.github.io/gondraworld-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-brilliance" />- Gondra World Dev -<i className="bi bi-brilliance" />
              </a>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
