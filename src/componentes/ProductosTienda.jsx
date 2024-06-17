import React from "react";
import { useState } from "react";
import "../assets/scss/estilo.scss";

function ProductosTienda() {
  const [count, setCount] = useState(0);

  return (
    <>
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
        <div className="gridPadre ">
          <div className="row row-cols-1 row-cols-md-4 g-4 objetoCentrado">
            {/* PRODUCTOS AGREGADOS EN JS */}
            {/* Agregar barra de descuento en algunos productos */}
            <div className="col producto" id="producto13" data-id={13}>
              {/* Contenido del producto */}
              <img src="../img/06-tienda/tienda1-.png" alt="Producto 1" />
              <div className="oferta">Oferta! 30% de descuento</div>
            </div>
            <div className="col producto" id="producto1" data-id={1}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto2" data-id={2}>
              {/* Contenido del producto 2 */}
            </div>
            <div className="col producto" id="producto3" data-id={3}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto4" data-id={4}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto5" data-id={5}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto6" data-id={6}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto7" data-id={7}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto8" data-id={8}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto9" data-id={9}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto10" data-id={10}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto11" data-id={11}>
              {/* Contenido del producto */}
            </div>
            <div className="col producto" id="producto12" data-id={12}>
              {/* Contenido del producto */}
            </div>
          </div>
        </div>
        {/* -------------LINK SEGUIR COMPRANDO------------------ */}
        <hr className="border border border-1 opacity-20" />
        <section className="botonSeguirComprando1">
          <a href="#">
            <i className="bi bi-shift-fill" /> Seguir Comprando
            <i className="bi bi-shift-fill" />
          </a>
        </section>
        <hr className="border border-1 opacity-20 " />
      </>
    </>
  );
}

export default ProductosTienda;
