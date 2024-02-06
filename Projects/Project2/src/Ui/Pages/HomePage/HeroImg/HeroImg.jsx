import React from "react";
import { useNavigate } from "react-router";

export default function HeroImg() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="hero-wrap"
        style={{ backgroundImage: "url(images/bg_2.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-8 ftco-animate d-flex align-items-end">
              <div className="text w-100 text-center">
                <h1 className="mb-4">
                  Good <span>Drink</span> for Good <span>Moments</span>.
                </h1>
                <p>
                  <a
                    onClick={() => navigate("/shop")}
                    className="btn btn-primary py-2 px-4"
                  >
                    Shop Now
                  </a>
                  <a
                    onClick={() => navigate("/about")}
                    className="btn btn-white btn-outline-white py-2 px-4"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-intro">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex">
              <div className="intro d-lg-flex w-100 ftco-animate">
                <div className="icon">
                  <span className="flaticon-support"></span>
                </div>
                <div className="text">
                  <h2>Online Support 24/7</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="intro color-1 d-lg-flex w-100 ftco-animate">
                <div className="icon">
                  <span className="flaticon-cashback"></span>
                </div>
                <div className="text">
                  <h2>Money Back Guarantee</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="intro color-2 d-lg-flex w-100 ftco-animate">
                <div className="icon">
                  <span className="flaticon-free-delivery"></span>
                </div>
                <div className="text">
                  <h2>Free Shipping &amp; Return</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
