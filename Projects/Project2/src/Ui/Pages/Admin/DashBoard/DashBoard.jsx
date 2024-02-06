import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import React from "react";

export default function DashBoard() {
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
                    Admin <i className="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  DashBoard <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h2 className="mb-0 bread">DashBoard</h2>
            </div>
          </div>
        </div>
      </section>

      <MDBCard
        className=""
        style={{
          backgroundColor: "rgb(62 59 59)",
        }}
      >
        <div
          style={{
            backdropFilter: "blur(5px)",
            height: "100%",
            padding: "100px 0px",
          }}
        >
          <MDBCardBody
            className="text-center"
            style={{
              width: "fit-content",
              marginInline: "auto",
            }}
          >
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-circle"
              style={{ width: "150px" }}
              fluid
            />
            <p className=" mb-1 text-white">FrontEnd Developer</p>
            <p className=" mb-4 text-white">Tops Tech, Surat</p>
            <div className="d-flex justify-content-center mb-2">
              <MDBBtn>Edit</MDBBtn>
              <MDBBtn outline className="ms-1">
                Message
              </MDBBtn>
            </div>
          </MDBCardBody>
        </div>
      </MDBCard>
    </>
  );
}
