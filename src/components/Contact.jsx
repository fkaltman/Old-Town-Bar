import React from 'react';
import bigcontact from "../assets/bigcontact.png"
import googlemap from "../assets/googlemap.png"
import address from "../assets/address.png"
import subway4 from "../assets/subway4.png"
import subway8 from "../assets/subway8.png"

export default function Contact () {

  return (
    <div className="contact-page">
      <img className="big-contact" src={bigcontact} alt="Contact"/>
      <img className="map" src={googlemap} alt="Google Map" />
      <img className="address" src={address} alt="Address" />
      <img className="subway4" src={subway4} alt="Subway symbols" />
      <img className="subway8" src={subway8} alt="Subway symbols" />
      
    </div>
  )
}