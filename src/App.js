import React from 'react';
import  Navigation  from './components/NavBar'
import './App.css';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <About />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
