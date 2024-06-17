import React, { useState } from "react";
import Header from "./componentes/Header";
import CarritoTienda from "./componentes/CarritoTienda";
import MainContent from "./componentes/MainContent";
import ProductosTienda from "./componentes/ProductosTienda";
import Contacto from "./componentes/Contacto";
import PublicidadDebajo from "./componentes/PublicidadDebajo";
import Footer from "./componentes/Footer";

function App() {
  // Estado para los productos
  const [products, setProducts] = useState([
    // Ejemplo de productos
    { id: 1, name: "Producto 1", price: 10 },
    { id: 2, name: "Producto 2", price: 20 },
  ]);

  // Estado para el carrito
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Header />
      <hr className="border border border-0 opacity-20" />
      <CarritoTienda cart={cart} />
      <hr className="border border border-0 opacity-20" />
      <MainContent />
      <hr className="border border border-0 opacity-20" />
      <ProductosTienda products={products} addToCart={addToCart} />
      <hr className="border border border-0 opacity-20" />
      <Contacto />
      <hr className="border border border-0 opacity-20" />
      <PublicidadDebajo />
      <hr className="border border border-0 opacity-20" />
      <Footer />
    </>
  );
}

export default App;
