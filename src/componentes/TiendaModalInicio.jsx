// src/componentes/TiendaModalInicio.jsx
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
          <table>
            <thead>
              <tr>
                <th className="tituloImportante4">Super Ofertas!</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td  className="objetoCentradoModal1">Camisetas 20% Off!</td>
              </tr>
              <tr>
                <td  className="objetoCentradoModal1">Envios Gratis a todo el pais!</td>
              </tr>
              <tr>
                <td  className="objetoCentradoModal1">Super Ahorro!</td>
              </tr>
            </tbody>
          </table>
          <h3 className="tituloImportante4">No te lo Pierdas!</h3>
          <button onClick={closeModal} className="btn-primary">
            Lo Quiero! Ver Más
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TiendaModalInicio;
