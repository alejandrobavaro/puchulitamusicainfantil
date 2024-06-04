import { useState } from 'react';
import HeaderNav from './componentes/Header';
import Footer from './componentes/Footer';
import MainContent from './componentes/MainContent'; 

function App() {
  return (
    <>
      <HeaderNav />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
