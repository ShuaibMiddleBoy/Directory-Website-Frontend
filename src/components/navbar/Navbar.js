import React, {useState} from 'react'
import style from "./navbar.module.css";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({className}) => {
  console.log(className);
  const [menuIcon, setMenuIcon] = useState();


  return (
    <div id='top-menu' className={className}>
    <nav className={menuIcon ? `${style.nav} ${style.active}` : style.nav}>
    <ul className={style.ul}>
    <li><Link to="/">Home</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/showcase">Showcase</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/media">Media</Link></li>
      <li><Link to="/directory">Directory</Link></li>
      <li><Link to="/ubuntu-drive">Ubuntu Drive</Link></li>
      <li><Link to="/contact-us">Contact Us</Link></li>

    </ul>
    {/* for responsive  */}
    <div className={style.mobile_nav}>
      <img style={{width:"100px"}} src="https://bmm2022.com/wp-content/uploads/2023/07/BMM-Logo-2.jpeg" alt="" />
      <div className={style.mobile_navbar_btn}>
      <MenuIcon name='menu-outline' className={`${style.mobile_nav_icon}`} onClick={()=>{setMenuIcon(true)}} />
      <CloseIcon name='close-outline' className={`${style.mobile_nav_icon} ${style.close_outline}`} onClick={()=>{setMenuIcon(false)}}/>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar
