import React from 'react';
import './App.css';
import Avtar from './Component/Avtar';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';


function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Avtar/>
     <About/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
