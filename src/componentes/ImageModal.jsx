import React, { useState } from 'react';
import '../assets/scss/estilo.scss';

function ImageModal({ images, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>&times;</span>
        <img src={images[currentImageIndex]} className="modal-image" alt="Producto" />
        <button className="prev-button" onClick={handlePrevImage}>&#10094;</button>
        <button className="next-button" onClick={handleNextImage}>&#10095;</button>
      </div>
    </div>
  );
}

export default ImageModal;
