import React, { useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Swal from "sweetalert2";
import ProductosTienda from "./ProductosTienda";
import CarritoTienda from "./CarritoTienda";
import DetalleProducto from "./DetalleProducto";
import SearchBar from "./SearchBar";
import "../assets/scss/estilo.scss";

function Tienda({ cart, setCart, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);
  const [detalle, setDetalle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

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

  const handleAddToCart = (producto) => {
    addToCart(producto);
    Toastify({
      text: `Añadiste ${producto.nombre} al carrito.`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      backgroundColor: "#4CAF50",
      className: "toastify-total",
    }).showToast();
  };

  const handlePagar = () => {
    Swal.fire({
      title: "Proceso de Pago",
      text: "Ahora vamos a realizar todo el proceso de tu pago. ¿Deseas continuar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, continuar",
      cancelButtonText: "No, volver a la tienda",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          "https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC",
          "_blank"
        );
      }
    });
  };

  const categories = ['Todos', ...new Set(products.map((producto) => producto.categoria))];

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter((producto) => producto.categoria === selectedCategory);

  return (
    <div className="tienda">
      <CarritoTienda cart={cart} />
      <SearchBar categories={categories} onCategoryChange={setSelectedCategory} />
      <ProductosTienda products={filteredProducts} addToCart={handleAddToCart} />
      <DetalleProducto detalle={detalle} />
    </div>
  );
}

export default Tienda;
