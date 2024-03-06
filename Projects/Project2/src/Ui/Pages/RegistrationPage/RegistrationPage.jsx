import React, { useState } from "react";
import "./RegistrationPage.css";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { login } from "../../../Redux/features/auth/authSlice";

export default function RegistrationPage() {
  let navigate = useNavigate();

  let [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  let [add, setAdd] = useState({
    add: "",
    city: "",
    state: "",
    zip: "",
  });

  const dispatch = useDispatch();

  function getRegData(e) {
    e?.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:9999/user/signUp",
      data: {
        ...user,
        address: [add],
      },
    })
      .then((res) => {
        console.log("getRegData  res: ", res);
        dispatch(login(res?.data));
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

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
                  SignUp <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h2 className="mb-0 bread" style={{ fontFamily: "FontAwesome" }}>
                Sign-Up Form
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div
        className="d-flex justify-content-center align-items-center py-5"
        style={{
          backgroundColor: "rgb(62 59 59)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleName" className="text-white">
                  Name
                </Label>
                <Input
                  bsSize="sm"
                  id="exampleName"
                  type="text"
                  value={user?.name}
                  onChange={(e) => setUser({ ...user, name: e?.target?.value })}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail" className="text-white">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  type="email"
                  value={user?.email}
                  onChange={(e) =>
                    setUser({ ...user, email: e?.target?.value })
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={10}>
              <FormGroup>
                <Label for="exampleAddress" className="text-white">
                  Address
                </Label>
                <Input
                  type="text"
                  id="exampleAddress"
                  value={add?.add}
                  onChange={(e) => setAdd({ ...add, add: e?.target?.value })}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleCity" className="text-white">
                  City
                </Label>
                <Input
                  type="text"
                  id="exampleCity"
                  value={add?.city}
                  onChange={(e) => setAdd({ ...add, city: e?.target?.value })}
                />
              </FormGroup>
            </Col>
            <Col md={1.5}>
              <FormGroup>
                <Label for="exampleState" className="text-white">
                  State
                </Label>
                <Input
                  type="text"
                  id="exampleState"
                  name="state"
                  value={add?.state}
                  onChange={(e) => setAdd({ ...add, state: e?.target?.value })}
                />
              </FormGroup>
            </Col>
            <Col md={1}>
              <FormGroup>
                <Label for="exampleZip" className="text-white">
                  Zip
                </Label>
                <Input
                  type="text"
                  id="exampleZip"
                  style={{ width: "90px" }}
                  value={add?.zip}
                  onChange={(e) => setAdd({ ...add, zip: e?.target?.value })}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleAge" className="text-white">
                  Age
                </Label>
                <Input
                  type="number"
                  id="exampleAge"
                  value={user?.age}
                  onChange={(e) => setUser({ ...user, age: e?.target?.value })}
                />
              </FormGroup>
            </Col>{" "}
            <Col md={5}>
              <FormGroup>
                <Label for="examplePass" className="text-white">
                  Password
                </Label>
                <Input
                  type="password"
                  id="examplePass"
                  value={user?.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e?.target?.value })
                  }
                />
              </FormGroup>
            </Col>
          </Row>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button className="bn5 mt-2" onClick={(e) => getRegData(e)}>
              Sign in
            </button>
            <p className="mt-2 text-white">
              Already have an account?
              <Link to={"/login"} className="text-decoration-underline ">
                {" "}
                Login Here
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
}
