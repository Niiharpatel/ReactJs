import React from "react";

export default function CardStructure({ data }) {
  return (
    <>
      <div className="col-md-3 d-flex">
        <div className="product ftco-animate">
          <div
            className="img d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${data?.img})` }}
          >
            <div className="desc">
              <p className="meta-prod d-flex">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="flaticon-shopping-bag"></span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="flaticon-heart"></span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="flaticon-visibility"></span>
                </a>
              </p>
            </div>
          </div>
          <div className="text text-center">
            <span className="sale">{data?.tag}</span>
            <span className="category">{data?.product}</span>
            <h2>{data?.name}</h2>
            <p className="mb-0">
              <span className="price price-sale">{data?.saleprice}</span>{" "}
              <span className="price">{data?.price}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
