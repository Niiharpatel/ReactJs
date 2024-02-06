import axios from "axios";
import { useState } from "react";
import { Button, FormGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../../Redux/features/auth/authSlice";
import { toast } from "react-toastify";

function LoginPage() {
  let navigate = useNavigate();

  let [userData, setUserData] = useState({
    email: "admin@admin.com",
    password: "123456",
  });

  let dispatch = useDispatch();
  function setData() {
    axios
      .post("http://localhost:9999/user/signin", userData)
      .then((resData) => {
        console.log(" resData: ", resData);
        dispatch(login(resData?.data));

        toast.success("Login Succesfully");
        window.scrollTo(0, 0);

        if (resData?.data?.data?.userType === "admin") {
          navigate("/");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err.message, { theme: "colored" });
        console.log(err);
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
                  Login <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h2 className="mb-0 bread" style={{ fontFamily: "FontAwesome" }}>
                Login Form
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hero-wrap hero-wrap-2"
        data-stellar-background-ratio="0.5"
        style={{ backgroundColor: "rgb(62 59 59)" }}
      >
        <div style={{ height: "100vh", width: "90vw" }}>
          <Form
            style={{
              marginLeft: "35vw",
              paddingTop: "120px",
            }}
          >
            <Form.Group as={Row} className="mb-3 " style={{ gap: "10px" }}>
              <Form.Label column sm="1" style={{ color: "white" }}>
                Email
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  placeholder="Enter email"
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              style={{ gap: "10px" }}
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="1" style={{ color: "white" }}>
                Password
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Button
                variant="dark"
                style={{ width: "80px", marginBottom: "10px" }}
                onClick={() => setData()}
              >
                Login
              </Button>
              <p style={{ paddingLeft: "10px", color: "white" }}>
                New User?{" "}
                <a
                  className="text-decoration-underline "
                  onClick={() => navigate("/registration")}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Register{" "}
                </a>
              </p>
            </Form.Group>
          </Form>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
