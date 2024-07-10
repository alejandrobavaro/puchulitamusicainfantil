import React, { useState } from 'react';
import ImageModal from './ImageModal';
import { useOfertas } from './OfertasContext'; // Importar el contexto de ofertas

const Producto = ({ producto, onEncargar }) => {
  const { id, nombre, precio, imagenes, categoria } = producto; 
  const [color, setColor] = useState('Negro');
  const [talla, setTalla] = useState('x-small');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { camisetas } = useOfertas(); // Usar el contexto de ofertas

  const cardTitleStyle = {
    color: '#000',
    textAlign: 'center',
    fontSize: '1.2em',
    marginTop: '10px'
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="col producto" id={`producto${id}`} data-id={id}>
      <div className="card">
        <div className="card-body">
          <section>
            <h5 style={{ textAlign: 'center' }}>
              <i className="bi bi-activity"></i> (Producto por encargo) <i className="bi bi-activity"></i>
            </h5>
          </section>
          {camisetas && categoria === 'camiseta' && (
            <div className="oferta-tag">Oferta 30%</div>
          )}
          <img src={imagenes[0]} className="card-img-top img-fluid" alt={nombre} onClick={openModal} style={{ cursor: 'pointer' }} />
          <h5 className="card-title" style={cardTitleStyle}>{nombre}</h5>
          <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Precio:
            <span>
              <h3 style={{ textAlign: 'center', color: '#000' }}> ${precio.toFixed(2)} </h3>
            </span>
          </h4>
          <label htmlFor={`selectColor${id}`} style={{ textAlign: 'center', fontWeight: 'bold' }}>
            <i className="bi bi-activity"></i> ELIGE COLOR <i className="bi bi-activity"></i>
          </label>
          <select
            id={`selectColor${id}`}
            className="form-select mb-3"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Gris-claro">Gris Claro</option>
            <option value="Gris-oscuro">Gris Oscuro</option>
            <option value="Rojo">Rojo</option>
            <option value="Naranja">Naranja</option>
          </select>
          <label htmlFor={`selectTalla${id}`} style={{ textAlign: 'center', fontWeight: 'bold' }}>
            <i className="bi bi-activity"></i> ELIGE TALLE <i className="bi bi-activity"></i>
          </label>
          <select
            id={`selectTalla${id}`}
            className="form-select"
            value={talla}
            onChange={(e) => setTalla(e.target.value)}
          >
            <option value="x-small">X-Small</option>
            <option value="xx-small">XX-Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-Large</option>
            <option value="xx-large">XX-Large</option>
          </select>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" onClick={() => onEncargar(id, color, talla)}>
              <i className="bi bi-shift-fill"></i> Encargar
            </button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ImageModal
          images={imagenes}
          currentImageIndex={currentImageIndex}
          closeModal={closeModal}
          handlePrevImage={handlePrevImage}
          handleNextImage={handleNextImage}
        />
      )}
    </div>
  );
};

export default Producto;
