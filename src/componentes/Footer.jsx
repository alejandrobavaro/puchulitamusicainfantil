import React from "react";
import "../assets/scss/estilo.scss";

function Footer() {
  return (
    <footer className="gridPadreFooter">
      <div className="footerElements">
        <div className="img1Footer"></div>
        <div className="linksFooter">
          <div className="textoMovimiento">
            <a href="https://www.instagram.com" target="_blank" rel="instagram">
              <i className="bi bi-instagram" /> Instagram <i className="bi bi-instagram" />
            </a>
          </div>
          <div className="textoMovimiento">
            <a href="https://www.youtube.com" target="_blank" rel="youtube">
              <i className="bi bi-youtube" /> Youtube <i className="bi bi-youtube" />
            </a>
          </div>
          <div className="textoMovimiento">
            <a href="https://www.facebook.com" target="_blank" rel="facebook">
              <i className="bi bi-facebook" /> Facebook <i className="bi bi-facebook" />
            </a>
          </div>
          <div className="textoMovimiento">
            <a href="https://www.twitter.com" target="_blank" rel="twitter">
              <i className="bi bi-twitter" /> X (Twitter) <i className="bi bi-twitter-x" />
            </a>
          </div>
          
          <h6 className="tituloPequeño4">
            <i className="bi bi-person-arms-up" /> Gondra World Dev <i className="bi bi-person-arms-up" />
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
