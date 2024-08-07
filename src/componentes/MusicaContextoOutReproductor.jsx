import React, { createContext, useState, useRef } from 'react';

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const playSong = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
    audioRef.current.src = cart[index]?.url;
    audioRef.current.play();
  };

  const pauseSong = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong(currentSongIndex);
    }
  };

  const addToCart = (song) => {
    setCart([...cart, song]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    if (currentSongIndex === index && isPlaying) {
      pauseSong();
    }
  };

  return (
    <MusicContext.Provider value={{
      cart,
      currentSongIndex,
      isPlaying,
      playSong,
      pauseSong,
      togglePlayPause,
      addToCart,
      removeFromCart,
      audioRef,
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicProvider };
