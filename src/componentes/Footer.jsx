import React from "react";
import "../assets/scss/estilo.scss";

function Footer() {
  return (
    <footer className="gridPadreFooter">
      <div className="footerContent">
        <div className="footerElements">
          <div className="img1Footer imagen-publicidad2">
            <a href="#"><img src="/img/02-logos/logoheader1-izquierda.png" alt="" /></a>
          </div>
          <div className="linksFooter">
            <div className="textoMovimiento tituloImportante4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram" /> Instagram
              </a>
            </div>
            <div className="textoMovimiento tituloImportante4">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube" /> Youtube
              </a>
            </div>

            <div className="img1Footer imagen-publicidad3">
            <a href="#"><img src="/img/02-logos/logoheader3-centro.png" alt="" /></a>
          </div>


            <div className="textoMovimiento tituloImportante4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook" /> Facebook
              </a>
            </div>
            <div className="textoMovimiento tituloImportante4">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter" /> X (Twitter)
              </a>
            </div>
          </div>
          <div className="img1Footer imagen-publicidad2">
            <a href="#"><img src="/img/02-logos/logoheader2-derecha.png" alt="" /></a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footerTrademark">
          <div className="textoMovimiento tituloImportante4">
            <a href="https://alejandrobavaro.github.io/gondraworld/" target="_blank" rel="gondraworldweb">
              <i className="bi bi-brilliance" /> Gondra World Dev <i className="bi bi-brilliance" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
