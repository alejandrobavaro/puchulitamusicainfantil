import React from "react";
import "../assets/scss/estilo.scss";

function Footer() {
  return (
    <footer className="gridPadreFooter">
      <div className="footerElements">
        <div className="img1Footer"></div>
        <div className="linksFooter">
          <div className="textoMovimiento tituloImportante4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram" /> Instagram  <i className="bi bi-instagram" /> 
            </a>
          </div>
          <div className="textoMovimiento tituloImportante4">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube" /> Youtube <i className="bi bi-youtube" />
            </a>
          </div>
          <div className="textoMovimiento tituloImportante4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook" /> Facebook  <i className="bi bi-facebook" />
            </a>
          </div>
          <div className="textoMovimiento tituloImportante4">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter" /> X (Twitter) <i className="bi bi-twitter" />
            </a>
          </div>
          <div className="textoMovimiento tituloImportante4">
            <a href="https://alejandrobavaro.github.io/gondraworld/" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-brilliance"></i> Gondra World Dev <i class="bi bi-brilliance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
