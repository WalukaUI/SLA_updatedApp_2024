import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./SideBar.css";

function SideBar() {
  return (
    <>
      <div className="cardDiv">
        <Card bg="light" className="cardChild">
          <Card.Body>
            <Card.Title>Ongoing events </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              #MedicalHelpSriLanka
            </Card.Subtitle>
            <Card.Text></Card.Text>

            <a
              href="https://www.gofundme.com/f/MedicalHelpSriLanka?qid=c0b1aadeec64b6f83b785f91356fa06c&fbclid=IwAR34hG_rNLLE95TWhZ_nAHgvB20BPQyXcmrG009oIRUF-eY0wWenZ2LBmaI"
              target="blank"
              rel="blank"
              className="btn btn-outline-success"
            >
              Go to our GoFundMe Page
            </a>

            <hr />

            <Card.Link href="/contact">
              Contact us for More Information
            </Card.Link>
          </Card.Body>
        </Card>
        <Card bg="light" className="cardChild">
          <Card.Body>
            <Card.Title>Recent Events</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              SLA Summer picnic
            </Card.Subtitle>
            <Card.Text>
              This year’s summer picnic was a lot of fun with delicious food,
              games and much needed catching up. It was great meeting many new
              faces as well.
            </Card.Text>
            <Card.Link href="#">More...</Card.Link>
            <hr />
            <Card.Subtitle className="mb-2 text-muted">
              O2 for Sri Lanka initiative
            </Card.Subtitle>
            <Card.Text></Card.Text>
            <a
              href=" https://www.gofundme.com/f/Sri-Lanka-Covid-Help-ICU-Oxygen?fbclid=IwAR0h9OI1eMIscrYNOMU77obfjoaeUKSqYpGg0cU6MPYXYsTVKShIWLpWuEc"
              target="blank"
              rel="blank"
              className="btn btn-outline-success"
            >
              Go to our GoFundMe Page
            </a>
            <br />
            <br />
            <Card.Link href="/contact">
              Contact us for More Information
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SideBar;
