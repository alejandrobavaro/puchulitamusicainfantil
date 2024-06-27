import React, { useEffect, useState } from 'react';
import '../assets/scss/estilo.scss';

function ProductosTienda({ products, addToCart }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Cargar los productos desde el JSON
    fetch('/productos.json')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  return (
    <div className="productos-contenedor row row-cols-1 row-cols-md-6 g-4">
      {productos.map(producto => (
        <div className="col producto" id={`producto${producto.id}`} key={producto.id}>
          <div className="card producto-card">
            <div className="card-body card4">
              <section>
                <h5 className="objetoCentrado1">
                  <i className="bi bi-activity"></i> (Producto por encargo) <i className="bi bi-activity"></i>
                </h5>
              </section>
              <img src={producto.imagen} className="card-img-top img-fluid" alt={producto.nombre} />
              <h5 className="card-title">{producto.nombre}</h5>
              <h4 className="objetoCentrado1 tituloPrecio1">
                Precio:<span>
                  <h3 className="tituloImportante2 objetoCentrado1"> ${producto.precio.toFixed(2)} </h3>
                </span>
              </h4>
              <label htmlFor={`selectColor${producto.id}`} className="objetoCentrado1 tituloPequeño1">
                <i className="bi bi-activity"></i> ELIGE COLOR <i className="bi bi-activity"></i>
              </label>
              <select id={`selectColor${producto.id}`} className="form-select mb-3 tituloPequeño4">
                <option value="Negro">Negro</option>
                <option value="Blanco">Blanco</option>
                <option value="Gris-claro">Gris Claro</option>
                <option value="Gris-oscuro">Gris Oscuro</option>
                <option value="Rojo">Rojo</option>
                <option value="Naranja">Naranja</option>
              </select>
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
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="botonEncargar btn btn-primary" onClick={() => {
                  const color = document.getElementById(`selectColor${producto.id}`).value;
                  const talla = document.getElementById(`selectTalla${producto.id}`).value;
                  addToCart({ ...producto, color, talla });
                }}>
                  <i className="bi bi-shift-fill"></i> Encargar 
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductosTienda;
