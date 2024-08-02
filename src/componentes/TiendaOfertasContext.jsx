import React, { createContext, useContext, useEffect, useState } from 'react';
import '../assets/scss/_03-Componentes/_Tienda.scss';

const OfertasContext = createContext();

export const OfertasProvider = ({ children }) => {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const response = await fetch('/productos.json');
        const productos = await response.json();
        const ofertasRemeras = productos.filter(producto => producto.categoria.toLowerCase() === 'camiseta');
        setOfertas(ofertasRemeras.map(producto => producto.id));
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchOfertas();
  }, []);

  return (
    <OfertasContext.Provider value={{ ofertas }}>
      {children}
    </OfertasContext.Provider>
  );
};

export const useOfertas = () => useContext(OfertasContext);
