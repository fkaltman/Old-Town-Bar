import React from 'react';
import bigcontact from "../assets/bigcontact.png"
import addresssubway2 from "../assets/addresssubway2.png"
import addresssubway3 from "../assets/addresssubway3.png"
import googlemap from "../assets/googlemap.png"

export default function Contact (){

  return (
    <div className="contact-page">
      <img className="big-contact" src={bigcontact} alt="Contact"/>
      <img className="map" src={googlemap} alt="Google Map" />
      <img className="address-subway2" src={addresssubway2} alt="Address" />
      <img className="address-subway3" src={addresssubway3} alt="Address" />
      {/* <img className="map" src={addresssubway} alt="Google Map" /> */}
      
    </div>
  )
}