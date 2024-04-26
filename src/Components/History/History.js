import React from "react";
import { Nav } from "react-bootstrap";
import "./History.css";
const History = () => {
  return (
    <div className="historyOuter">
      <section className="about-us py-4 aboutcontainer" id="about-us">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-success">History</h1>
              <h2>SLA Midwest</h2>
              <hr />
              <h5>
                SLA is The Second Oldest Sri Lankan Association in the United
                States.
              </h5>
              <h6>Prof Rex Fernando was our founding President </h6>
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
export default History;
