import React, { useEffect, useState } from 'react';
import Producto from './ProductoLista';

const ProductoLista = ({ onEncargar }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {productos.map(producto => (
        <Producto key={producto.id} producto={producto} onEncargar={onEncargar} />
      ))}
    </div>
  );
};

export default ProductoLista;
