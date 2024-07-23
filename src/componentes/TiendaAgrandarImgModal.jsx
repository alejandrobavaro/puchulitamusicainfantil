import React, { useState } from 'react';


function TiendaAgrandarImgModal({ images, isOpen, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
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

export default TiendaAgrandarImgModal;
