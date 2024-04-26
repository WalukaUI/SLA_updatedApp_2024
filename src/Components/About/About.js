import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="aboutUsOuter">
      <section className="about-us py-5 aboutcontainer" id="about-us">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-success">Welcome!</h1>
              <h2>Know More About Us</h2>
              <hr />
              <p>
                We are a community of Sri Lankans, mostly living in the
                Midwestern states of the US. While most of the members are from
                the state of Missouri, our community spans across the US from
                coast to coast.
              </p>
              <p>
                SLA committee and members are dedicated to help people in need
                in both Sri Lanka and USA through various fundraising and
                charitable projects. According to historical documents SLA is
                the second oldest registered Sri Lankan non-profit organization
                in the US.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/img/logo.jpg" alt="logo" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
