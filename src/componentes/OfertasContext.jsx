import React, { createContext, useState } from 'react';

// Crea el contexto
export const OfertasContext = createContext();

// Crea un proveedor para el contexto
export const OfertasProvider = ({ children }) => {
  const [productosEnOferta, setProductosEnOferta] = useState([1, 2, 3, 4]); // IDs de productos en oferta

  return (
    <OfertasContext.Provider value={{ productosEnOferta }}>
      {children}
    </OfertasContext.Provider>
  );
};
