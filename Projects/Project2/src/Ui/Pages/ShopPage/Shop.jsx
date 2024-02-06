import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ShopData from "./ShopData.json";
import ShopCard from "./ShopCard";

export default function Shop() {
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
                  Shop <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h2 className="mb-0 bread" style={{ fontFamily: "FontAwesome" }}>
                Shop
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="d-flex gap-4 flex-wrap justify-content-center  pt-2 pb-2">
                  {ShopData?.map((e, i) => {
                    return <ShopCard data={e} key={i} />;
                  })}
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="sidebar-box ftco-animate">
                <div className="categories">
                  <h3>Product Types</h3>
                  <ul className="p-0">
                    <li>
                      <a href="#">
                        Brandy <span className="fa fa-chevron-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Gin <span className="fa fa-chevron-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Rum <span className="fa fa-chevron-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tequila <span className="fa fa-chevron-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Vodka <span className="fa fa-chevron-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Whiskey <span className="fa fa-chevron-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Recent Blog</h3>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_1.jpg)" }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="fa fa-calendar"></span> Apr. 18, 2020
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-comment"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_1.jpg)" }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="fa fa-calendar"></span> Apr. 18, 2020
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-comment"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url(images/image_1.jpg)" }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="fa fa-calendar"></span> Apr. 18, 2020
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="fa fa-comment"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
