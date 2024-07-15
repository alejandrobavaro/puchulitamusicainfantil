import React, { useEffect, useState } from 'react';
import { useOfertas } from './OfertasContext';
import Producto from './Producto';

const PublicidadDebajo = () => {
  const { ofertas } = useOfertas();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('/productos.json');
        const productos = await response.json();
        const productosOfertas = productos.filter(producto => ofertas.includes(producto.id));
        setProductos(productosOfertas);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchProductos();
  }, [ofertas]);

  return (
    <div className="publicidad-container">
      <div className="publicidad-grid">
        {productos.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default PublicidadDebajo;
