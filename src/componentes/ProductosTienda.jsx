import React, { useState } from 'react';
import ImageModal from './ImageModal'; // Import the ImageModal component
import '../assets/scss/estilo.scss';

function ProductosTienda({ products, addToCart }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="productos-contenedor row row-cols-1 row-cols-md-6 g-4">
      {products.map(producto => (
        <div className={`col producto ${producto.oferta ? 'oferta' : ''}`} id={`producto${producto.id}`} key={producto.id}>
          <div className="card producto-card">
            <div className="card-body card4">
              {producto.oferta && <div className="oferta-tag">Oferta</div>} {/* Mostrar la etiqueta de oferta */}
              <section>
                <h5 className="objetoCentrado1">
                  <i className="bi bi-activity"></i> (Producto por encargo) <i className="bi bi-activity"></i>
                </h5>
              </section>
              <img
                src={producto.imagenes[0]}
                className="card-img-top img-fluid"
                alt={producto.nombre}
                onClick={() => openModal(producto.imagenes)} // Open modal on image click
                style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickability
              />
              <h5 className="card-title">{producto.nombre}</h5>
              <h6 className="card-category">{producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}</h6>
              <h4 className="objetoCentrado1 tituloPrecio1">
                Precio:<span>
                  <h3 className="tituloImportante2 objetoCentrado1"> ${producto.precio.toFixed(2)} </h3>
                </span>
              </h4>
              <label htmlFor={`selectTalla${producto.id}`} className="objetoCentrado1 tituloPequeño1">
                <i className="bi bi-activity"></i> ELIGE TALLE <i className="bi bi-activity"></i>
              </label>
              <select id={`selectTalla${producto.id}`} className="form-select tituloPequeño4">
                <option value="x-small">X-Small</option>
                <option value="xx-small">XX-Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
                <option value="xx-large">XX-Large</option>
              </select>
              <h6 className='objetoCentrado1 tituloPequeño1'>  <i className="bi bi-activity"></i>(Talles infantiles) <i className="bi bi-activity"></i></h6>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="botonEncargar btn btn-primary" onClick={() => {
                  const talla = document.getElementById(`selectTalla${producto.id}`).value;
                  addToCart({ ...producto, color: 'Negro', talla, imagen: producto.imagenes[0] });
                }}>
                  <i className="bi bi-shift-fill"></i> Encargar 
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ImageModal images={selectedImages} isOpen={isModalOpen} closeModal={closeModal} /> {/* Render the ImageModal */}
    </div>
  );
}

export default ProductosTienda;
