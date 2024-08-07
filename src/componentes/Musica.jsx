import React, { useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import MusicaCancionesLista from "./MusicaCancionesLista";
import ReproductorMusica from "./MusicaReproductor";
import { useOfertas } from "./TiendaOfertasContext";
import '../assets/scss/_01-General/_Toastify.scss'; 

function Musica({ cart, setCart, addToCart, removeFromCart, searchQuery, setSearchQuery }) {
  const [songs, setSongs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [isPlaying, setIsPlaying] = useState(false); // Para verificar si se está reproduciendo
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

    cargarCancionesDesdeJSON();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isPlaying) {
        const confirmationMessage = "¿Deseas seguir reproduciendo las canciones?";
        // El mensaje de confirmación personalizado puede no mostrarse en todos los navegadores
        // pero se debe establecer una propiedad en el evento para que el navegador muestre el diálogo predeterminado
        event.preventDefault();
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPlaying]);

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
        />
      </div>
      <ReproductorMusica
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={handleClearCart}
        isPlaying={isPlaying} // Pasar el estado isPlaying al reproductor
        setIsPlaying={setIsPlaying} // Pasar el setter del estado isPlaying al reproductor
      />
    </div>
  );
}

export default Musica;
