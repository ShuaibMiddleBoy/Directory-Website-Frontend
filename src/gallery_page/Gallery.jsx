import React, { useState } from 'react';
import style from "./gallery.module.css";
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import galleryData from './galleryData';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openItem = (item) => {
    setSelectedItem(item);
  };

  const closeItem = () => {
    setSelectedItem(null);
  };

  return (
    <div id='Gallery'>
      <Header />
      <Navbar />
      <div className={style.galleryContent}>
        <div className={style.wrapper}>
          <h1>Gallery</h1>
          <div className={style.videoList}>
            {galleryData.map((item, index) => (
              <div key={index} className={style.galleryItems} onClick={() => openItem(item)}>
                <img src={item.imageSRC} alt="Thumbnail" />
              </div>
            ))}
          </div>

          {selectedItem && (
            <div className={style.videoPopup}>
              <div className={style.backdrop} onClick={closeItem}></div>
              <div className={style.popupContent}>
                <button className='close-btn' onClick={closeItem}>Close</button>
                <video controls width="550" height="400">
                  <source src={selectedItem.videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
