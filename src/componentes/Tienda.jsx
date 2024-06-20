import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ProductosTienda from './ProductosTienda';
import CarritoTienda from './CarritoTienda';
import DetalleProducto from './DetalleProducto';
import '../assets/scss/estilo.scss';

function Tienda({ cart, setCart, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    const cargarProductosDesdeJSON = async () => {
      try {
        const response = await fetch('../public/productos.json');
        const productos = await response.json();
        setProducts(productos);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    cargarProductosDesdeJSON();
  }, []);

  const handlePagar = () => {
    Swal.fire({
      title: 'Proceso de Pago',
      text: 'Ahora vamos a realizar todo el proceso de tu pago. ¿Deseas continuar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'No, volver a la tienda',
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          'https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC',
          '_blank'
        );
      }
    });
  };

  return (
    <div className="tienda">
      <ProductosTienda products={products} addToCart={addToCart} />
      <CarritoTienda cart={cart} />
     
      <DetalleProducto detalle={detalle} />
    </div>
  );
}

export default Tienda;
