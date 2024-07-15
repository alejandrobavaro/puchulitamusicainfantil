import React from 'react';
import PublicidadDebajo from './PublicidadDebajo';


const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h1>Welcome to Puchulita Música Infantil</h1>
        <p>Your favorite place for children's music products</p>
      </div>
      
      <div className="product-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/img/product1.png" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img src="/img/product2.png" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
            <img src="/img/product3.png" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
          </div>
        </div>
      </div>

      <div className="advertisement-section">
        <h2>Special Offers</h2>
        <PublicidadDebajo />
      </div>
    </div>
  );
};

export default Home;
