import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { BsArrowsCollapse, BsArrowsExpand } from 'react-icons/bs';
import '../assets/scss/_03-Componentes/_TiendaCarritoMini2.scss';
import '../assets/scss/_01-General/_SweetAlert.scss';

const TiendaCarritoMini2 = ({ cart, removeFromCart, clearCart }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const location = useLocation();
  const total = cart.reduce((sum, product) => sum + product.precio, 0);
  const showLeftCartLink = location.pathname.startsWith("/tienda");

  const handleAgregarAlCarritoClick = () => {
    swal({
      title: "Producto agregado",
      text: "El producto ha sido agregado a tu carrito de compras.",
      icon: "../../public/img/02-logos/puchulitamusicainfantil1.png", 
      button: {
        text: "Continuar",
        className: "sweetalert-button",
      },
      className: "custom-swal",
    });
  };
  

  return (
    <div className={`mini-carrito2 ${isMinimized ? 'minimized' : ''}`}>
      {showLeftCartLink && (
        <div className="flota-carrito-izquierda">
          <Link to="/carrito" className="link-carrito">
            {!isMinimized && (
              <>
                <h6 className="texto-carrito">A Pagar</h6>
                <div>
                  <section className="tituloPrecioCarrito">
                    ${total.toFixed(2)}
                  </section>
                </div>

                <div className="objetoCentrado1">
                  <button className="botonComprar1" onClick={handleAgregarAlCarritoClick}>
                    <h3 className="tituloImportante1 textoMovimiento">
                      <i className="bi bi-shift-fill"></i> Comprar
                    </h3>
                  </button>
                </div>
              </>
            )}
          </Link>
        </div>
      )}
      <button className="toggle-button" onClick={() => setIsMinimized(prevState => !prevState)}>
        {isMinimized ? <BsArrowsExpand /> : <BsArrowsCollapse />}
      </button>
    </div>
  );
};

export default TiendaCarritoMini2;
