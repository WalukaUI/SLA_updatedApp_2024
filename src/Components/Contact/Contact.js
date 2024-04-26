import React from "react";
import { Nav } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact_outer">
      <section className="about-us py-5 aboutcontainer" id="about-us">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-success">Contact </h1>
              <h2>SLA Midwest</h2>
              <hr />
              <h5>
                <b>E-Mail :</b> slausmw@gmail.com
              </h5>
              {/* <p><b>TP :</b> </p> */}
              <p>
                <b>Address :</b> SLA Association St Louis, MO, USA.
              </p>
              <hr />
              <Nav.Link href="/members">
                <button className="btn btn-warning">Members</button>
              </Nav.Link>
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
export default Contact;
