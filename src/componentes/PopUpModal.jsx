import React from "react";
import Modal from "react-modal";
import "../assets/scss/_13-popups.scss"; // Ruta actualizada

Modal.setAppElement("#root"); // Esto es necesario para la accesibilidad del modal

const PopUpModal = ({ showModal, closeModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Promoción"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-content">
        <h2 className="tituloImportante4">PROMOS INVIERNO!</h2>
        <p>Aprovechá los mejores beneficios!</p>

        <table>
          <thead>
            <tr>
              <th>Super Ofertas! - Super Ahorro!</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            <tr>
              <td>Remeras 20% Off!</td>
            </tr>
            <tr>
              <td>45% OFF en envíos</td>
            </tr>
            <tr>
              <td>Remeras de Puchulita 20% Off!</td>
            </tr>
            <tr>
              <td>Descuentos sorpresa</td>
            </tr>
          </tbody>
        </table>
        <h3 className="tituloPequeño1">No te lo Pierdas!</h3>
        <button onClick={closeModal} className="btn-primary botonEncargar">
          Lo Quiero! Ver Más
        </button>
      </div>
    </Modal>
  );
};

export default PopUpModal;
