import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "./NavigatioBar.css";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { userAuth } from "../../Pages/Auth/Auth";

function NavigationBar() {
  const navigate = useNavigate();
  let { user, logout, setSearchText } = userAuth();

  return (
    <>
      <Navbar bg="dark">
        <div className="container">
          <Navbar.Brand href="#home">
            <img
              src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg"
              style={{ width: "70px", height: "72px" }}
              alt=""
            />
          </Navbar.Brand>

          <Nav className="me-auto">
            <NavLink
              to={"/"}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to={"/plant"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Plant
            </NavLink>
            <NavLink
              to={"/about"}
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </Nav>

          <Form>
            <div className="nav-right-content">
              <div className="box-1">
                {/* <div className="currency">
                                <a href=""><i className="fa-solid fa-dollar-sign"></i></a>0.00
                            </div> */}
                <div className="cart-icon">
                  <a href="">
                    <i className="fa-solid fa-cart-shopping">
                      <sup> 0</sup>
                    </i>
                  </a>
                </div>
              </div>

              <div className="box-2">
                <input
                  type="text"
                  placeholder="Find Your Plants Here!"
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>

              <div className="user-icon">
                {user ? (
                  <Button onClick={() => logout()} variant="outline-light">
                    LogOut
                  </Button>
                ) : (
                  <Button
                    onClick={() => navigate("/loginform")}
                    variant="outline-light"
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </div>
      </Navbar>
    </>
  );
}

export default NavigationBar;
