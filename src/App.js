import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import SignleProduect from "./singleProduct_page/SignleProduect";
import Cart from "./cart_page/Cart";
import Error from "./error_page/Error";
import Register from "./register_page/Register";
import { Toaster } from 'react-hot-toast';
import Login from "./login_page/Login";
import Dashboard from "./User/Dashborad/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";


const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home title='Home' />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/media" element={<Media />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="singleproduct/:id" element={<SignleProduect />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/marketing-oppurtunity" element={<Marketing />} />
        <Route path="/ubuntu-drive" element={<Ubuntu />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />}></Route>

        {/* private routes  */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />}></Route>
        </Route>
      </Routes>

    </Router>
  )
}

export default App;
