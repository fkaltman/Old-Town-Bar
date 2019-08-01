import React from 'react';
import googlemap from "../assets/googlemap.png"
import address from "../assets/address.png"


export default function Contact() {

  return (
    <div className="contact-page">
      <h2 className="contact">Contact</h2>
      <div className="map-and-address">
        <img className="map" src={googlemap} alt="Google Map" />
        <img className="address" src={address} alt="Address" />
      </div>
    </div>
  )
}
