// src/components/Header.js
import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <Nav />
      <h1>My Blog</h1>
      <h2>Welcome to my blog</h2>
    </header>
  );
}

export default Header;