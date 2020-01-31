import React from 'react';
import './App.css';
import  Navigation  from './components/Navbar'; 
import CarouselSlider from './components/CarouselSlider';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <CarouselSlider/>
      
    </div>
  );
}

export default App;
