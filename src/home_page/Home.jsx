import React, { useEffect, useRef } from 'react';
import Navbar from "../components/navbar/Navbar";
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import style from "./home.module.css";

const Home = () => {
  const videoUrl = 'https://bmm2022.com/wp-content/uploads/2023/07/cd3a3d7c-9f6f-4347-a126-59748666c4ac.mp4';
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video when the component mounts
    videoRef.current.play().catch(error => {
      // Autoplay was prevented, you can handle it here.
      console.error('Autoplay was prevented:', error);
    });
  }, []);

  return (
    <div id='home'>

  <Navbar className={style.specificCSS} />
      <section>
        <video
          ref={videoRef}
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <div className={style.companies}>
        <div className={style.boxes}>
        <div className={style.box}>
          <a href="">
          <img src="https://bmm2022.com/wp-content/uploads/2023/08/BK-Lobster-Logo-1024x576.jpg" alt="image" style={{width:"270px"}} />
          </a>
        </div>
        <div className={style.box}>
          <a href="">
          <img src="https://bmm2022.com/wp-content/uploads/2023/07/Screenshot_20210805-1209022.png" alt="image" style={{width:"140px"}} />
          </a>
        </div>
        <div className={style.box}>
          <a href="">
          <img src="https://bmm2022.com/wp-content/uploads/2023/08/Logo-low-quality-pic.jpeg" alt="image" style={{width:"120px"}} />
          </a>
        </div>
        <div className={style.box}>
          <a href="">
          <img src="https://bmm2022.com/wp-content/uploads/2023/08/Kilwins10.png" alt="image" style={{width:"170px"}}/>
          </a>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
