// src/App.js
import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import './style.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Article title="Blog Post 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." imgSrc="image1.jpg" />
        <Article title="Blog Post 2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." imgSrc="image2.jpg" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
