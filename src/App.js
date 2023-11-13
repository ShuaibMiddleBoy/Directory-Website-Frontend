import React from "react";
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Home from "./home_page/Home";
import Directory from "./directory_Page/Directory";
import About from "./about_us_page/About";
import Showcase from "./showcase_page/Showcase";
import Gallery from "./gallery_page/Gallery";
import Media from "./media_page/Media";
import Shop from "./shop_page/Shop";
import Marketing from "./marketing_oppurtunity_page/Marketing";
import Ubuntu from "./ubuntu_drive_page/Ubuntu";
import Contact from "./contact_us_page/Contact";


const App = () => {
  return(
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/directory" element={<Directory/>}/>
    <Route path="/about-us" element={<About/>} />
    <Route path="/showcase" element={<Showcase/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/media" element={<Media/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/marketing-oppurtunity" element={<Marketing/>}/>
    <Route path="/ubuntu-drive" element={<Ubuntu/>}/>
    <Route path="/contact-us" element={<Contact/>}/>
  </Routes>
</Router>
  )
}

export default App;
