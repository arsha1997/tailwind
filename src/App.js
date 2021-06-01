import './App.css';

import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}

export default App;
