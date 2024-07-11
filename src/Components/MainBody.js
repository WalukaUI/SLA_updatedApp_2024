import React from "react";
import { Route, Routes } from "react-router-dom";
import "./main.css";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Carosel from "./Carousel/Carousel";
import Navbar from "./NavBar/Navbar";
import SideBar from "./SideBar/SideBar";
import flag from "../Images&Vedios/flag.mp4";
import Footer from "./Footer/Footer";
import BecomeAmem from "./BecomeAmemberForm/BecomeAmember";
import Members from "./Members/Members";
import History from "./History/History"
import Events from "./Events/Events"

function MainBody() {
  return (
    <div className="Login-component">
      <video className="videoTag" autoPlay loop muted>
        <source src={flag} type="video/mp4" />
      </video>
        <Navbar />
        <div className="row mainRow">
          <div className="col-md-8 mainDiv2">
            <Routes>
              <Route path="/" element={<Carosel/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path="/history" element={<History/>}/>
              <Route path="/members" element={<Members/>}/>
              <Route path="/create" element={<BecomeAmem/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </div>
          <div className="col-md-4  mainDiv1">
            <SideBar />
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default MainBody;