import React from 'react';
import LinkMenu from './components/LinkMenu/index.js';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import Users from './components/Users';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <LinkMenu />    
      <Header/>
      <Slideshow/>
      <Users/>
      <Footer/>
    </div>
  );
}

export default App;
