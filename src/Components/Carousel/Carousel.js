import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

function Carosel() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/fundraiserhealth.jpg"
            alt="slcovid19"
          />

          <Carousel.Caption className="description">
            <h5 className="carasolevent">Ongoing event...</h5>
            <h3> #MedicalHelpSriLanka</h3>
            <a
              href="https://www.gofundme.com/f/MedicalHelpSriLanka?qid=c0b1aadeec64b6f83b785f91356fa06c&fbclid=IwAR34hG_rNLLE95TWhZ_nAHgvB20BPQyXcmrG009oIRUF-eY0wWenZ2LBmaI"
              target="blank"
              rel="blank"
              className="btn btn-success"
            >
              Go to our GoFundMe Page
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/lighthouse.jpg"
            alt="lighthouse"
          />
          <Carousel.Caption className="description attributename">
            Photo by{" "}
            <a href="https://unsplash.com/@the_bracketeer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Hendrik Cornelissen
            </a>
            on{" "}
            <a href="https://unsplash.com/s/photos/sri-lanka-tourism?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/fishing.jpg"
            alt="fishing"
          />
          <Carousel.Caption className="description attributename">
            Photo by{" "}
            <a href="https://unsplash.com/@ddd4242?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Daria Dyachenko
            </a>
            on{" "}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="../img/train.jpg" alt="train" />
          <Carousel.Caption className="description attributename">
            Photo by{" "}
            <a href="https://unsplash.com/@adamgoguru?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Adam Vandermeer
            </a>
            on{" "}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="../img/kandy.jpg" alt="kandy" />
          <Carousel.Caption className="description attributename">
            Photo by{" "}
            <a href="https://unsplash.com/@yvesalarie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Yves Alarie
            </a>
            on{" "}
            <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carosel;
