import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './assets/scss/estilo.scss';

// `React.StrictMode` es una herramienta para detectar problemas potenciales en la aplicación. 
// No afecta el comportamiento en producción.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Importaciones:

// React: La biblioteca principal de React.
// ReactDOM: La biblioteca para manipular el DOM.
// App: El componente raíz de tu aplicación.
// ./assets/scss/estilo.scss: Archivo de estilos globales para la aplicación.
// Montaje del componente raíz:

