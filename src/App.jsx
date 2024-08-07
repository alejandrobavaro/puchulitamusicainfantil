
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './componentes/Header';
import MainContent from './componentes/MainContent';
import ContactoLogoRedes from './componentes/ContactoLogoRedes';
import ContactoFormularioSlider from './componentes/ContactoFormularioSlider';
import PublicidadDebajo from './componentes/MainPublicidadSlider';
import Footer from './componentes/Footer';
import Tienda from './componentes/Tienda';
import CarritoCompleto from './componentes/TiendaCarritoCompra';
import { OfertasProvider } from './componentes/TiendaOfertasContext';
import { AuthProvider } from './componentes/SesionAuthContext';
import Login from './componentes/SesionLogin';
import Register from './componentes/SesionRegistrate';
import Logout from './componentes/SesionLogout';
import Musica from './componentes/Musica';
import MainWhatsappIcon from './componentes/MainWhatsappIcon';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './assets/scss/_01-General/_BodyIndexApp.scss';

function App() {
  const [productCart, setProductCart] = useState([]);
  const [musicCart, setMusicCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addProductToCart = (product) => {
    setProductCart([...productCart, product]);
  };

  const removeProductFromCart = (id) => {
    setProductCart(productCart.filter((product) => product.id !== id));
  };

  const addMusicToCart = (song) => {
    setMusicCart([...musicCart, song]);
  };

  const removeMusicFromCart = (id) => {
    setMusicCart(musicCart.filter((song) => song.id !== id));
  };

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
        window.open('https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC', '_blank');
      }
    });
  };

  return (
    <Router>
      <AuthProvider>
        <OfertasProvider>
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <hr className="border border-0 opacity-20" />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/contacto" element={<><ContactoLogoRedes /><ContactoFormularioSlider /></>} />
            <Route path="/tienda" element={<Tienda setCart={setProductCart} cart={productCart} addToCart={addProductToCart} removeFromCart={removeProductFromCart} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
            <Route path="/carrito" element={<CarritoCompleto cart={productCart} removeFromCart={removeProductFromCart} handlePagar={handlePagar} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/musica" element={<Musica setCart={setMusicCart} cart={musicCart} addToCart={addMusicToCart} removeFromCart={removeMusicFromCart} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          </Routes>
          <hr className="border border-0 opacity-20" />
          <PublicidadDebajo />
          <Footer />
          <MainWhatsappIcon />
        </OfertasProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;