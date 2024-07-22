import React, { useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import CancionesLista from "./CancionesLista";
import ReproductorMusica from "./ReproductorMusica";
import SearchBar from "./SearchBar";
import { useOfertas } from "./OfertasContext";

function Musica({
  cart,
  setCart,
  addToCart,
  removeFromCart,
  searchQuery,
  setSearchQuery,
}) {
  const [songs, setSongs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const { ofertas } = useOfertas();

  useEffect(() => {
    const cargarCancionesDesdeJSON = async () => {
      try {
        const response = await fetch("/canciones.json");
        const canciones = await response.json();
        setSongs(canciones);
      } catch (error) {
        console.error("Error al cargar las canciones:", error);
      }
    };

    cargarCancionesDesdeJSON();
  }, []);

  const handleAddToCart = (cancion) => {
    addToCart(cancion);
    Toastify({
      text: `Añadiste ${cancion.nombre} a la lista de reproducción.`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      backgroundColor: "#ff69b4",
      className: "toastify-total",
    }).showToast();
  };

  const handlePlayPreview = (cancion) => {
    Toastify({
      text: `Reproduciendo preview de ${cancion.nombre}.`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      backgroundColor: "#9370db",
      className: "toastify-total",
    }).showToast();
    // Lógica para reproducir la preview
  };

  const categories = [
    "Todos",
    ...new Set(songs.map((cancion) => cancion.categoria)),
  ];

  const filteredSongs = songs.filter((cancion) => {
    const matchesCategory =
      selectedCategory === "Todos" || cancion.categoria === selectedCategory;
    const matchesSearchQuery =
      searchQuery === "" ||
      cancion.nombre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <div className="musica-container">
      <SearchBar
        categories={categories}
        onCategoryChange={setSelectedCategory}
      />
      <CancionesLista
        songs={filteredSongs}
        addToCart={handleAddToCart}
        playPreview={handlePlayPreview}
      />
      <ReproductorMusica cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default Musica;
