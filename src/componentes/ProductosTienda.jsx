import React, { useState, useEffect } from "react";
import "../assets/scss/estilo.scss";

function ProductosTienda() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json') // Ruta relativa a la carpeta 'public'
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  return (
    <>
      {/*---------------- TIENDA PRODUCTOS ---------------*/}

      {/*---------------- BUSCADOR ---------------*/}
      <div className="gridPadre">
        {/* Agregar un campo de búsqueda */}
        <input
          type="text"
          className="form-control objetoCentrado1"
          id="buscarProducto"
          placeholder="Buscar producto..."
          required
        />
        {/* Agregar filtros por categoría */}
        <select className="form-control " id="filtroCategoria">
          <option value="">Todas las categorías</option>
          <option value="ropa">Ropa</option>
          <option value="calzado">Calzado</option>
          {/* Agregar más opciones de filtro según tus necesidades */}
        </select>
      </div>

      <hr className="border border border-0 opacity-20" />

      {/* PRODUCTOS--------------------------------- */}
      <div className="gridPadreProductos">
        {productos.map(producto => (
          <div className="producto" key={producto.id} id={`producto${producto.id}`} data-id={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="oferta">{producto.oferta ? `Oferta! ${producto.oferta}` : ''}</div>
          </div>
        ))}
      </div>

      {/* -------------LINK SEGUIR COMPRANDO------------------ */}
      <hr className="border border border-1 opacity-20" />
      <section className="objetoCentrado1 btn botonSeguirComprando1">
        <a href="#">
          <i className="bi bi-shift-fill" /> Seguir Comprando
          <i className="bi bi-shift-fill" />
        </a>
      </section>
      <hr className="border border-1 opacity-20 " />
    </>
  );
}

export default ProductosTienda;
