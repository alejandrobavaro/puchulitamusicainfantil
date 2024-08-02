import React, { useState } from 'react';
import ImageModal from './TiendaAgrandarImgModal';
import { useOfertas } from './TiendaOfertasContext';
import '../assets/scss/_03-Componentes/_Tienda.scss';

function TiendaProductos({ products, addToCart }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ofertas } = useOfertas();

  const openImageModal = (images, index) => {
    setSelectedImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="productos-grid">
      {products.map((product) => (
        <div key={product.id} className="producto-card">
          {ofertas.includes(product.id) && (
            <div className="oferta-tag">Oferta 30%</div>
          )}
          <img
            src={product.imagenes[0]}
            alt={product.nombre}
            className="producto-image"
            onClick={() => openImageModal(product.imagenes, 0)}
          />
          <h5 className="producto-title">{product.nombre}</h5>
          <h4 className="producto-price">Precio: ${product.precio.toFixed(2)}</h4>
          <button
            className="btn btn-primary producto-button"
            onClick={() => addToCart(product)}
          >
            Añadir al Carrito
          </button>
        </div>
      ))}
      {isModalOpen && (
        <ImageModal
          images={selectedImages}
          currentImageIndex={currentImageIndex}
          closeModal={closeImageModal}
          handlePrevImage={prevImage}
          handleNextImage={nextImage}
        />
      )}
    </div>
  );
}

export default TiendaProductos;
