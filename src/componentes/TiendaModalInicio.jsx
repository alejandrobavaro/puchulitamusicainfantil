import React from "react";
import Modal from "react-modal";
import '../assets/scss/_03-Componentes/_TiendaModalInicio.scss'; // Verifica esta ruta

Modal.setAppElement("#root"); // Asegúrate de que el ID 'root' esté presente en tu index.html

const TiendaModalInicio = ({ showModal, closeModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Promoción"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-wrapper">
        <button onClick={closeModal} className="modal-close">
          &times; {/* Carácter '×' para cerrar */}
        </button>
        <div className="modal-content">
          <h2>PROMOS PUCHULITA!</h2>
          <p className="tituloImportante4">Aprovechá los mejores beneficios!</p>
          <div className="promo-list">
            <div className="promo-item">Super Ofertas! - Super Ahorro!</div>
            <div className="promo-item">Camisetas 20% Off!</div>
            <div className="promo-item">Envios Gratis a todo el país!</div>
            <div className="promo-item">Premios sorpresa!</div>
          </div>
          
          <button onClick={closeModal} className="btn-primary">
            Lo Quiero!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TiendaModalInicio;
