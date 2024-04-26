import React from "react";
import {BrowserRouter as Router,Route,Redirect,Switch,} from "react-router-dom";
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
      <Router>
        <Navbar />
        <div className="row mainRow">
          <div className="col-md-8 mainDiv2">
            <Switch>
              <Route path="/" exact><Carosel /></Route>
              <Route path="/about" exact><About /></Route>
              <Route path="/events" exact><Events /></Route>
              <Route path="/history" exact><History /></Route>
              <Route path="/members" exact><Members /></Route>
              <Route path="/create" exact><BecomeAmem /></Route>
              <Route path="/contact" exact><Contact /></Route>
              <Redirect to="/" />
            </Switch>
          </div>
          <div className="col-md-4  mainDiv1">
            <SideBar />
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default MainBody;
