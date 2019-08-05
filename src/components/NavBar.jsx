import React from 'react'

export default class Navigation extends React.Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className="nav-container header">
        {/* 
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>

        <div className="nav-title">
        The Old Town Bar, since 1892
        </div>
        <div className="link-container menu">
          <a className="nav-link" href='#about-us' >About us</a>
          <a className="nav-link" href="#hstry" >History</a>
          <a className="nav-link" href="menu" >Menu</a>
          <a className="nav-link" href="#contact-us"  >Contact Us</a>
        </div> */}
        <header class="header">
          <a href="" className="logo">The Old Town Bar, since 1892</a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" for="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li><a href='#about-us' >About us</a></li>
            <li><a href="#hstry" >History</a></li>
            <li><a href="menu" >Menu</a></li>
            <li><a href="#contact-us"  >Contact Us</a></li>
          </ul>
        </header>
      </div>
    )
  }
}