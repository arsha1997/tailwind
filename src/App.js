import './App.css';

import Content from './components/Content';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
    </>
  );
}

export default App;
