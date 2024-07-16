import React, { useEffect, useState } from "react";
import { useOfertas } from "./OfertasContext";
import Producto from "./Producto";

const PublicidadDebajo = () => {
  const { ofertas } = useOfertas();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        const productosOfertas = productos.filter((producto) =>
          ofertas.includes(producto.id)
        );
        setProductos(productosOfertas);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProductos();
  }, [ofertas]);

  return (

    <div className="publicidad-grid">

    <div className="publicidad-container gridPadreProductos1">

        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
      
      <hr className="border border-1 opacity-5" />

      <div className="gridPadreProductos">
        <div className="publicidad-container">
          <div className="publicidad-grid">
          <a href="#">
              <img
                alt="icono"
                className="imagen-publicidad"
                src="/img/05-img-costados-larga/16aicono.png"
              />
            </a>
          <a href="#">
              <img
                alt="icono"
                className="imagen-publicidad"
                src="/img/05-img-costados-larga/4.png"
              />
            </a>
       
            <a href="#">
              <img
                alt="icono"
                className="imagen-publicidad"
                src="/img/05-img-costados-larga/1a.png"
              />
            </a>
            <a href="#">
              <img
                alt="icono"
                className="imagen-publicidad"
                src="/img/05-img-costados-larga/2.png"
              />
            </a>
        
            <a href="#">
              <img
                alt="icono"
                className="imagen-publicidad"
                src="/img/05-img-costados-larga/20.png"
              />
            </a>
            <a href="#">
              <img
                alt="icono"
                className="imagen-publicidad"
                src="/img/05-img-costados-larga/3.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicidadDebajo;
