import React from 'react'
import './App.css';
import Slider from './components/Slider/Slider';
import MostRecp from './components/Mostpopularrecipes/Most';
import Main from './components/Most Recipes/Main';
import PerfectMain from './components/Perfect/PerfectMain';
import MakeThis from './components/MakeThis/MakeThis';
import Footer from './components/Footer/Footer'




function App() {
  return (
    <>
      <h1></h1>
      <Slider />


      <MostRecp />

      <Main />

      <PerfectMain />
      <MakeThis />
      <Footer />

    </>
  );
}

export default App;
