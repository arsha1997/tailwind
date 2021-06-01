import './App.css';

import { Route, Switch } from 'react-router';

import About from './pages/about';
import Footer from './components/Footer';
import Home from './pages';
import Menu from './pages/menu';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Switch />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/menu" exact component={Menu} />
      <Footer />
    </>
  );
}

export default App;
