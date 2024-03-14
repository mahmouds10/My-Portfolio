import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
