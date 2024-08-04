import React, { useEffect, useState } from 'react';
import Producto from './TiendaProductos'; // Verifica que el archivo esté en la misma carpeta o ajusta la ruta si es necesario
import { OfertasProvider } from './TiendaOfertasContext'; // Verifica que el archivo esté en la misma carpeta o ajusta la ruta si es necesario
import '../assets/scss/_03-Componentes/_TiendaProductosLista.scss'; // Verifica la ruta del archivo SCSS

const TiendaProductosLista = ({ onEncargar }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  return (
    <OfertasProvider>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {productos.map(producto => (
          <Producto key={producto.id} producto={producto} onEncargar={onEncargar} />
        ))}
      </div>
    </OfertasProvider>
  );
};

export default TiendaProductosLista;
