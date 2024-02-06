import React, { useState } from "react";
import "./LoginForm.css";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { userAuth } from "../Auth/Auth";

export default function LoginForm() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let Auth = userAuth();

  function addData() {
    Auth.login(user);
  }

  return (
    <>
      <div className="form-bg">
        <div className="form-set">
          <h1
            className=""
            style={{
              color: "white",
              textAlign: "center",
              paddingBlock: "30px",
            }}
          >
            Welcome User
          </h1>

          <Form className="form" id="login-form">
            <FormGroup floating>
              <Input
                className="loginform-in"
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                value={user?.email}
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                value={user?.password}
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>{" "}
            <FormGroup check>
              <Input id="exampleCheckbox" name="checkbox" type="checkbox" />
              <Label check for="exampleCheckbox">
                Remember Me
              </Label>
            </FormGroup>{" "}
            <button className="form-btn" onClick={() => addData()}>
              Login
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

{
  /* <Form>
   
    <FormGroup>
        <Label for="exampleEmail">
            Valid input
        </Label>
        <Input valid />
        <FormFeedback valid>
            Sweet! that name is available
        </FormFeedback>
        <FormText>
            Example help text that remains unchanged.
        </FormText>
    </FormGroup>
    <FormGroup>
        <Label for="examplePassword">
            Invalid input
        </Label>
        <Input invalid />
        <FormFeedback>
            Oh noes! that name is already taken
        </FormFeedback>
        <FormText>
            Example help text that remains unchanged.
        </FormText>
    </FormGroup>
    <FormGroup>
        <Label for="exampleEmail">
            Input without validation
        </Label>
        <Input />
        <FormFeedback tooltip>
            You will not be able to see this
        </FormFeedback>
        <FormText>
            Example help text that remains unchanged.
        </FormText>
    </FormGroup>
    <FormGroup className="position-relative">
        <Label for="exampleEmail">
            Valid input
        </Label>
        <Input valid />
        <FormFeedback
            tooltip
            valid
        >
            Sweet! that name is available
        </FormFeedback>
        <FormText>
            Example help text that remains unchanged.
        </FormText>
    </FormGroup>
    <FormGroup className="position-relative">
        <Label for="examplePassword">
            Invalid input
        </Label>
        <Input invalid />
        <FormFeedback tooltip>
            Oh noes! that name is already taken
        </FormFeedback>
        <FormText>
            Example help text that remains unchanged.
        </FormText>
    </FormGroup>
</Form>; */
}
