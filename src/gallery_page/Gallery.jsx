import React from 'react'
import style from "./gallery.module.css"
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'




import LightGallery from 'lightgallery/react';


const Gallery = () => {
  return (
    <div id='Gallery'>
        <Header/>
        <Navbar/>
        <h1>Gallery</h1>
        <Footer/>
    </div>
  )
}

export default Gallery
