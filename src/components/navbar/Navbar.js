import React from 'react'
import style from "./navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='top-menu'>
    <nav className={style.nav}>
    <ul className={style.ul}>
    <li><Link to="/">Home</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/showcase">Showcase</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/media">Media</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/directory">Directory</Link></li>
      <li><Link to="/marketing-oppurtunity">Marketing Oppurtunity</Link></li>
      <li><Link to="/ubuntu-drive">Ubuntu Drive</Link></li>
      <li><Link to="/contact-us">Contact Us</Link></li>
    </ul>
  </nav>
  </div>
  )
}

export default Navbar
