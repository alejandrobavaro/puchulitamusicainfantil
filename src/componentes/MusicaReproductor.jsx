import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { BsShuffle, BsRepeat, BsPlayFill, BsPauseFill, BsSkipEnd, BsSkipStart, BsVolumeUp, BsVolumeMute } from 'react-icons/bs';
import '../assets/scss/_03-Componentes/_MusicaReproductor.scss';

function MusicaReproductor({ cart, removeFromCart, clearCart }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState('none');
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      audioRef.current.src = cart[currentSongIndex].url;
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error('Error al intentar reproducir:', error));
      }
    }
  }, [currentSongIndex, isPlaying, cart]);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current?.addEventListener('timeupdate', updateTime);
    return () => audioRef.current?.removeEventListener('timeupdate', updateTime);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackRate;
    }
  }, [volume, playbackRate]);

  const handlePlayPause = () => {
    setIsPlaying(prevState => !prevState);
  };

  const handleSkipNext = () => {
    if (isShuffle) {
      setCurrentSongIndex(Math.floor(Math.random() * cart.length));
    } else {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % cart.length);
    }
  };

  const handleSkipPrev = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + cart.length) % cart.length);
  };

  const handleEnd = () => {
    if (repeatMode === 'one') {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else if (repeatMode === 'all') {
      handleSkipNext();
    } else {
      setIsPlaying(false);
    }
  };

  const handleRepeatMode = () => {
    if (repeatMode === 'none') {
      setRepeatMode('one');
    } else if (repeatMode === 'one') {
      setRepeatMode('all');
    } else {
      setRepeatMode('none');
    }
  };

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    setVolume(volume);
  };

  const handleRateChange = (e) => {
    const rate = e.target.value;
    setPlaybackRate(rate);
  };

  return (
    <div className="reproductor-musica">
      {cart.length > 0 ? (
        <>
          <audio
            ref={audioRef}
            onEnded={handleEnd}
          ></audio>
          <div className="reproductor-card">
            <img src={cart[currentSongIndex].imagen} alt={cart[currentSongIndex].nombre} />
            <div className="reproductor-info">
              <h3>{cart[currentSongIndex].nombre}</h3>
              <p>{cart[currentSongIndex].artista}</p>
              <p>{cart[currentSongIndex].categoria}</p>
              <p>{cart[currentSongIndex].duracion}</p>
            </div>
          </div>
          <div className="controls-musica">
            <button onClick={handleSkipPrev}><BsSkipStart /></button>
            <button onClick={handlePlayPause}>
              {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
            </button>
            <button onClick={handleSkipNext}><BsSkipEnd /></button>
            <button onClick={() => setIsShuffle(!isShuffle)}>
              <BsShuffle color={isShuffle ? '#ff69b4' : '#fff'} />
            </button>
            <button onClick={handleRepeatMode}>
              <BsRepeat color={repeatMode !== 'none' ? '#ff69b4' : '#fff'} />
            </button>
            <button onClick={clearCart}>Clear</button>
          </div>
          <div className="volume-controls">
            <BsVolumeUp />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
            <BsVolumeMute />
          </div>
          <div className="rate-controls">
            <label htmlFor="rate">Speed:</label>
            <select id="rate" value={playbackRate} onChange={handleRateChange}>
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>
          <div className="progress-musica">
            <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
            <progress value={currentTime} max={audioRef.current?.duration || 0}></progress>
            <span>{Math.floor((audioRef.current?.duration || 0) / 60)}:{Math.floor((audioRef.current?.duration || 0) % 60).toString().padStart(2, '0')}</span>
          </div>
        </>
      ) : (
        <p>No hay canciones en la lista de reproducción.</p>
      )}
    </div>
  );
}

MusicaReproductor.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default MusicaReproductor;
