import React from "react";
import "../assets/scss/estilo.scss";

function Footer() {
  return (
    <footer className="gridPadreFooter">
      <div className="footerElements">
        <div className="img1Footer"></div>
        <div className="linksFooter">
          <div className="textoMovimiento">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram" /> Instagram
            </a>
          </div>
          <div className="textoMovimiento">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube" /> Youtube
            </a>
          </div>
          <div className="textoMovimiento">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook" /> Facebook
            </a>
          </div>
          <div className="textoMovimiento">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter" /> X (Twitter)
            </a>
          </div>
          <h6 className="tituloPequeño4">
            <i className="bi bi-person-arms-up" /> Gondra World Dev
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
