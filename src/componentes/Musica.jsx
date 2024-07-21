import React, { useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Swal from "sweetalert2";
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
      backgroundColor: "#4CAF50",
      className: "toastify-total",
    }).showToast();
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
    <div className="gridPadreProductos1 musica ">
      <div className="musica-container ">
        <SearchBar
          categories={categories}
          onCategoryChange={setSelectedCategory}
        />
        <div className="gridPadre">
          <CancionesLista songs={filteredSongs} addToCart={handleAddToCart} />
        </div>
        <hr />
      </div>
      <div className="gridPadreProductos1 ">
        <ReproductorMusica cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default Musica;
