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

// ReactDOM.createRoot(document.getElementById('root')): Crea un nodo raíz en el DOM, donde se montará la aplicación React.
// render(...): Renderiza el componente App dentro del nodo raíz. El componente App se envuelve en React.StrictMode para ayudar a identificar problemas potenciales en el desarrollo.
