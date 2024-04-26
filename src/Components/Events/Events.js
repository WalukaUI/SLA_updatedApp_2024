import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="eventOuter">
      <div className="container">
        <div className="card-group vgr-cards">
          <div className="card">
            <div className="card-img-body">
              {/* <img className="card-img" src="./img/1.jpg" alt="Cardimagecap" /> */}
            </div>
            <div className="card-body">
              {/* <h4 className="card-title">Upcoming events</h4> */}
            </div>
          </div>
          <div className="card">
            <div className="card-img-body">
              <img
                className="card-img"
                src="./img/fundraiserhealth.jpg"
                alt="Cardimagecap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Ongoing events </h4>
              <p className="card-text">
                <b> #MedicalHelpSriLanka </b>
              </p>
              <a
                href="https://www.gofundme.com/f/MedicalHelpSriLanka?qid=c0b1aadeec64b6f83b785f91356fa06c&fbclid=IwAR34hG_rNLLE95TWhZ_nAHgvB20BPQyXcmrG009oIRUF-eY0wWenZ2LBmaI"
                target="blank"
                rel="blank"
                className="btn btn-outline-success"
              >
                Go to our GoFundMe Page
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-body">
              <img
                className="card-img"
                src="https://picsum.photos/450/250"
                alt="Cardimagecap"
              />
            </div>

            <div className="card-body">
              <h4 className="card-title">Recent events </h4>
              <p className="card-text">
                <b> SLA Summer picnic </b>
              </p>
              <p className="card-text">
                This year’s summer picnic was a lot of fun with delicious food,
                games and much needed catching up. It was great meeting many new
                faces as well.
              </p>
              <p className="card-text">
                <b> O2 for Sri Lanka initiative </b>
              </p>
              <a
                href=" https://www.gofundme.com/f/Sri-Lanka-Covid-Help-ICU-Oxygen?fbclid=IwAR0h9OI1eMIscrYNOMU77obfjoaeUKSqYpGg0cU6MPYXYsTVKShIWLpWuEc"
                target="blank"
                rel="blank"
                className="btn btn-outline-success"
              >
                Go to our GoFundMe Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;
