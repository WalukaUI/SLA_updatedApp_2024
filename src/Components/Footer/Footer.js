import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start bg-black text-muted"
        style={{ fontSize: "1.3rem" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/slamidwestusa/"
              target="_blank"
              className="me-4 text-reset"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://mail.google.com/"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footerTopics">
                  <i className="fas fa-gem me-3 "></i>SRI LANKA ASSOCIATION
                </h6>
                <p>
                  The Second Oldest Sri Lankan Association in the United States.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footerTopics">
                  USEFUL LINKS
                </h6>
                <p>
                  <p>Social Media</p>
                  <a
                    href="https://twitter.com/SlausaM"
                    className="text-reset"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://www.facebook.com/slamidwestusa/"
                    className="text-reset"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 footerTopics">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home me-3"></i> SLA Association St Louis,
                  MO, USA.
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  midwestlsa@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 636 328 9352
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021
          <a className="text-reset fw-bold" href="!#">
            SLA
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
