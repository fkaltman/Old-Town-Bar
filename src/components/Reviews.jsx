import React from 'react';
import barinside from '../assets/barinside.jpg';

function Reviews() {
  return (
    <div className="reviews" id="reviews-scroll">
      <a href="reviews-scroll"></a>
      <img className="reviewsimg" src={barinside} alt="bar"/>
      <div className="reviewstext">
      <h4>Reviews</h4>
      <p>“The old-fashioned saloon still serves a noble function in the national life. Manhattan is blessed with some fine ones, but the jewel in the crown is The Old Town.”
      <br></br>
      - New York Times 
      <br></br>
      </p>
      <p>“A friendly place for burgers and fries, animated downstairs and a bit quieter and more private upstairs”
      <br></br>
      - Win Spectator
      <br></br>
      </p>
      <p>“The crowd is diverse -- from students to happy hour suits -- all drawn to its history, wide beer selection, and unobtrusive conversational atmosphere. You get the sense you’re part of something important, alive, timeless. Vintage New York bar-wise, it’s as good as it gets.”
      <br></br>
      - CityGuide 
      </p>
      </div>
    </div>
  )
}

export default Reviews;