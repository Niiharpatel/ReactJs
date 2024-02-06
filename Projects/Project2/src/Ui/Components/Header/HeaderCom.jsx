import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../../Redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { getAllCart } from "../../../Redux/features/cartSlice/cartSlice";

export default function HeaderCom() {
  const userSlice = useSelector((state) => {
    return state?.authSlice;
  });

  const { user, token } = userSlice;

  let dispatch = useDispatch();

  function logOutHandler() {
    dispatch(logout());
    toast.success("LogOut Succesfully");
  }

  useEffect(() => {
    dispatch(getAllCart());
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <p className="mb-0 phone pl-md-2">
                <a href="#" className="mr-2">
                  <span className="fa fa-phone mr-1"></span> +91 1234 567
                </a>

                <a href="#">
                  <span className="fa fa-paper-plane mr-1"></span>
                  youremail@email.com
                </a>
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end">
              <div className="social-media mr-4">
                <p className="mb-0 d-flex">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </a>
                </p>
              </div>
              <div className="reg">
                <p className="mb-0">
                  <NavLink to={"/registration"} className="mr-2">
                    Sign Up
                  </NavLink>
                  {token?.length > 0 ? (
                    <NavLink to={"/login"} onClick={() => logOutHandler()}>
                      Log Out
                    </NavLink>
                  ) : (
                    <NavLink to={"/login"}>Log In</NavLink>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-red ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Liquor <span>store</span>
          </a>
          <div className="order-lg-last btn-group">
            <Link
              to={"/cart"}
              className="btn-cart dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="flaticon-shopping-bag"></span>
              <div className="d-flex justify-content-center align-items-center">
                <small>0</small>
              </div>
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-item d-flex align-items-start" href="#">
                <div
                  className="img"
                  style={{ backgroundImage: "urlimages/prod-1.jpg)" }}
                ></div>
                <div className="text pl-3">
                  <h4>Bacardi 151</h4>
                  <p className="mb-0">
                    <a href="#" className="price">
                      $25.99
                    </a>
                    <span className="quantity ml-3">Quantity: 01</span>
                  </p>
                </div>
              </div>
              <div className="dropdown-item d-flex align-items-start" href="#">
                <div
                  className="img"
                  style={{ backgroundImage: "urlimages/prod-2.jpg)" }}
                ></div>
                <div className="text pl-3">
                  <h4>Jim Beam Kentucky Straight</h4>
                  <p className="mb-0">
                    <a href="#" className="price">
                      $30.89
                    </a>
                    <span className="quantity ml-3">Quantity: 02</span>
                  </p>
                </div>
              </div>
              <div className="dropdown-item d-flex align-items-start" href="#">
                <div
                  className="img"
                  style={{ backgroundImage: "urlimages/prod-3.jpg)" }}
                ></div>
                <div className="text pl-3">
                  <h4>Citadelle</h4>
                  <p className="mb-0">
                    <a href="#" className="price">
                      $22.50
                    </a>
                    <span className="quantity ml-3">Quantity: 01</span>
                  </p>
                </div>
              </div>
              <a
                className="dropdown-item text-center btn-link d-block w-100"
                href="cart.html"
              >
                View All
                <span className="ion-ios-arrow-round-forward"></span>
              </a>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              {user?.userType === "admin" ? (
                <>
                  <Link to={"/dashboard"} className="nav-item active">
                    <li href="index.html" className="nav-link">
                      Dashboard
                    </li>
                  </Link>
                  <Link to={"/allproduct"} className="nav-item active">
                    <li href="index.html" className="nav-link">
                      Product
                    </li>
                  </Link>
                  <Link to={"/order"} className="nav-item active">
                    <li href="index.html" className="nav-link">
                      Order
                    </li>
                  </Link>
                  <Link to={"/users"} className="nav-item active">
                    <li href="index.html" className="nav-link">
                      User
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/"} className="nav-item active">
                    <li href="index.html" className="nav-link">
                      Home
                    </li>
                  </Link>
                  <Link to={"/about"} className="nav-item">
                    <li className="nav-link">About</li>
                  </Link>
                  <Link to={"/shop"} className="nav-item">
                    <li className="nav-link">Shop</li>
                  </Link>
                  <Link to={"/blog"} className="nav-item">
                    <li href="blog.html" className="nav-link">
                      Blog
                    </li>
                  </Link>
                  <Link to={"/contact"} className="nav-item">
                    <li href="contact.html" className="nav-link">
                      Contact
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
