import React from "react";

export default function AboutPage() {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url(images/bg_2.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate mb-5 text-center">
              <p className="breadcrumbs mb-0">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  About us <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h2 className="mb-0 bread" style={{fontFamily:"FontAwesome"}}>About Us</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
