import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router";
import "./AlertBox.css";

function AlertBox() {
  const Navigate = useNavigate();

  return (
    <>
      <div className="alert-main">
        <Alert style={{ border: "none" }}>
          <Alert.Heading>
            <div class="animate__animated animate__flash animate__repeat-3 animate__delay-1s  animate__slow">
              Warning !!!
            </div>
          </Alert.Heading>

          <h5 style={{ fontWeight: "500", fontFamily: "emoji" }}>
            Welcome User, Want to access our website you need to login first!
            Thank You :)
          </h5>
          <h6 style={{ fontFamily: "emoji" }}> Nihar Patel</h6>
          <hr />
          <p className="mb-0" onClick={() => Navigate("/LoginForm")}>
            <Alert.Link href="#">Click Here to login </Alert.Link>
          </p>
        </Alert>
      </div>
    </>
  );
}

export default AlertBox;
