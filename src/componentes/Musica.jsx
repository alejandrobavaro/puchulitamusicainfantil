import React, { useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import MusicaCancionesLista from "./MusicaCancionesLista";
import ReproductorMusica from "./MusicaReproductor";
import { useOfertas } from "./TiendaOfertasContext";
import '../assets/scss/_03-Componentes/_Musica.scss';

function Musica({ cart, setCart, addToCart, removeFromCart, searchQuery, setSearchQuery }) {
  const [songs, setSongs] = useState([]);
  const [productos, setProductos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const { ofertas } = useOfertas();

  useEffect(() => {
    const cargarCancionesDesdeJSON = async () => {
      try {
        const response = await fetch("/canciones.json");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const canciones = await response.json();
        setSongs(canciones);
      } catch (error) {
        console.error("Error al cargar las canciones:", error);
      }
    };

    const cargarProductosDesdeJSON = async () => {
      try {
        const response = await fetch("/productos.json");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const productosData = await response.json();
        setProductos(productosData);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    cargarCancionesDesdeJSON();
    cargarProductosDesdeJSON();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    Toastify({
      text: `Añadiste ${item.nombre} a la lista de reproducción.`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      style: {
        background: "#ff69b4",
      },
      className: "toastify-musica",
    }).showToast();
  };

  const handlePlayPreview = (cancion) => {
    Toastify({
      text: `Reproduciendo preview de ${cancion.nombre}.`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      style: {
        background: "#9370db",
      },
      className: "toastify-musica",
    }).showToast();
  };

  const handleClearCart = () => {
    setCart([]);
    Toastify({
      text: "Lista de reproducción vaciada.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      style: {
        background: "#000000",
      },
      className: "toastify-musica",
    }).showToast();
  };

  const filteredSongs = songs.filter(song =>
    song.nombre.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "Todos" || song.categoria === selectedCategory)
  );

  const categories = ['Todos', ...new Set(songs.map((song) => song.categoria))];

  return (
    <div className="musica-container">
      <div className="tabla-canciones-container">
        <MusicaCancionesLista
          songs={filteredSongs}
          handleAddToCart={handleAddToCart}
          handlePlayPreview={handlePlayPreview}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          productos={productos} // Pasar los productos al componente
        />
      </div>
      <ReproductorMusica
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={handleClearCart}
      />
    </div>
  );
}

export default Musica;
