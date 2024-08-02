// src/componentes/Tienda.jsx
import React, { useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Swal from "sweetalert2";
import ProductosTienda from "./TiendaProductos";
import CarritoTienda from "./TiendaCarrito";
import DetalleProducto from "./TiendaDetalleProducto";
import Header from "./Header"; // Cambiado de HeaderSearchBar a Header
import PopUpModal from "./TiendaPopUpPromoInicio";
import { useOfertas } from "./TiendaOfertasContext";
import '../assets/scss/_03-Componentes/_Tienda.scss';

function Tienda({ cart, setCart, addToCart, removeFromCart, searchQuery, setSearchQuery }) {
  const [products, setProducts] = useState([]);
  const [detalle, setDetalle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showModal, setShowModal] = useState(false);
  const { ofertas } = useOfertas();

  useEffect(() => {
    const cargarProductosDesdeJSON = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        setProducts(productos);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    cargarProductosDesdeJSON();
  }, []);

  const handleShowDetalle = (producto) => {
    setDetalle(producto);
  };

  const handleAddToCart = (producto) => {
    addToCart(producto);
    Toastify({
      text: `Añadiste ${producto.nombre} al carrito.`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      style: {
        background: "#ff69b4",
      },
      className: "toastify-tienda",
    }).showToast();
  };

  const handleClearCart = () => {
    setCart([]);
    Toastify({
      text: "Carrito vaciado.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      style: {
        background: "#000000",
      },
      className: "toastify-tienda",
    }).showToast();
  };

  const filteredProducts = products.filter(product =>
    product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'Todos' || product.categoria === selectedCategory)
  );

  const categories = ['Todos', ...new Set(products.map((product) => product.categoria))];

  return (
    <>
     
      <div className="tienda-container">
        <ProductosTienda
          products={filteredProducts}
          handleAddToCart={handleAddToCart}
          handleShowDetalle={handleShowDetalle}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
        <CarritoTienda
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={handleClearCart}
        />
        {detalle && <DetalleProducto producto={detalle} onClose={() => setDetalle(null)} />}
        {showModal && <PopUpModal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default Tienda;
