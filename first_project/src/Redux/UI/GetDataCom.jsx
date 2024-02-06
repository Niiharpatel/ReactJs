import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../User/Action";

function GetDataCom(props) {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function addDataToState() {
    props?.addData(addUser(userData));
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <>
      <Form>
        <FormGroup row>
          <Label for="exampleName" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="exampleName"
              name="name"
              placeholder="Enter Name"
              type="text"
              value={userData?.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e?.target?.value })
              }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter Email"
              type="email"
              value={userData?.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e?.target?.value })
              }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Pass
          </Label>
          <Col sm={10}>
            <Input
              id="inPassword"
              name="password"
              value={userData?.password}
              placeholder="Enter Password"
              type="password"
              onChange={(e) =>
                setUserData({ ...userData, password: e?.target?.value })
              }
            />
          </Col>
        </FormGroup>

        <Button
          color="danger"
          onClick={() => addDataToState()}
          className="mt-5 mb-5"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

const toDispatchToProps = (dispatch) => {
  return {
    addData: dispatch,
  };
};

export default connect(null, toDispatchToProps)(GetDataCom);
