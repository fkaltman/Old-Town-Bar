import React from 'react';
import hero  from '../assets/hero.jpg';

function About() {
  return (
    <div className="about" id="about-us">
      <a href="about-us"></a>
      <div id="hero">

      </div>
      {/* <img className="hero" src={hero} alt="aboutus"/> */}
      <h3 className="abouth3">About Us</h3>
      <p className="aboutp">For well over one hundred years the Old Town Bar has been serving food and drink to New Yorkers here on 18th Street and is still one of the great neighborhood bars of New York City. As the blocks around it have consistently changed over the decades, the Old Town has remained a constant. Whether it be a quiet afternoon with a book and a burger or a packed Friday night, the Old Town draws an eclectic mix of New York’s people and visitors, young and old, drawn here by its unique character, the reasonable prices, and the casual and unpretentious ambiance that has outlasted every trend and fad that has passed through over the past century. 
      </p>
    </div>
  )
}

export default About;