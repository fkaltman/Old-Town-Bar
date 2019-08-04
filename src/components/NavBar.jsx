import React from 'react'

export default class Navigation extends React.Component{
  constructor() {
    super()
  }
  

  render() {
    return (
      <div className="nav-container">
        <div className="nav-title">
        The Old Town Bar, since 1892
        </div>
        <div className="link-container">
          <a className="nav-link" href='#about-us' >About us</a>
          <a className="nav-link" href="#hstry" >History</a>
          <a className="nav-link" href="menu" >Menu</a>
          {/* <a className="nav-link" href="#reviews-scroll" >Reviews</a> */}
          <a className="nav-link" href="#contact-us"  >Contact Us</a>
        </div>
      </div>
    )
  }
}