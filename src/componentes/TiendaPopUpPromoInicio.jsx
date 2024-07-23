import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PopUpModal = ({ showModal, closeModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Promoción"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-content objetoCentrado1">
        <h2>PROMOS PUCHULITA!</h2>
        <p className="tituloImportante4">Aprovechá los mejores beneficios!</p>
        <table>
          <thead>
            <tr>
              <th>Super Ofertas! - Super Ahorro!</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Camisetas 20% Off!</td>
            </tr>
            <tr>
              <td>Envios Gratis a todo el pais!</td>
            </tr>
            {/* <tr>
              <td>Remeras de Puchulita 20% Off!</td>
            </tr> */}
            <tr>
              <td>Premios sorpresa!</td>
            </tr>
          </tbody>
        </table>
        <h3 className="tituloImportante4">No te lo Pierdas!</h3>
        <button onClick={closeModal} className="btn-primary">
          Lo Quiero! Ver Más
        </button>
      </div>
    </Modal>
  );
};

export default PopUpModal;
