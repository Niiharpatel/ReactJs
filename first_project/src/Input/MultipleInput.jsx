import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

function MultipleInput() {
  let [name, setName] = useState({
    email: "",
    name: "",
    address: "",
  });
  function getData(e) {
    setName({ ...name, [e.target.name]: e.target.value });
  }

  const [arr, setArr] = useState([]);

  function addFunc() {
    if (
      name.email.length > 0 &&
      name.name.length > 0 &&
      name.address.length > 0
    ) {
      setArr([...arr, name]),
        setName({
          email: "",
          name: "",
          address: "",
        });
    } else {
      alert("Please Fill Up Form!");
    }
  }

  const [ind, setIndex] = useState(null);

  function deletHandler(index) {
    arr.splice(index, 1);
    setArr([...arr]);
  }

  function delAll() {
    setArr([]);
    setName({
      email: "",
      name: "",
      address: "",
    });
  }

  function updateFun(index, data) {
    setName(data);
    setIndex(index);
  }

  function changeFun() {
    if (ind || ind === 0) {
      arr.splice(ind, 1, name);
      setArr([...arr]);
      setName({
        email: "",
        name: "",
        address: "",
      });
      setIndex(null);
    }
  }

  return (
    <>
      <Form style={{ width: "fit-content", margin: "auto" }}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            value={name.email}
            placeholder="Enter Email Id"
            type="email"
            style={{ width: "350px" }}
            onChange={(e) => getData(e)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input
            id="exampleName"
            name={"name"}
            value={name.name}
            placeholder="Enter Name"
            type="text"
            style={{ width: "350px" }}
            onChange={(e) => getData(e)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Address</Label>
          <Input
            id="exampleText"
            name="address"
            value={name.address}
            type="textarea"
            style={{ width: "350px" }}
            onChange={(e) => getData(e)}
          />
        </FormGroup>

        <Button className="btn btn-success" onClick={() => addFunc()}>
          Submit
        </Button>

        <Button color="primary" className="ms-3" onClick={() => delAll()}>
          DeleteAll
        </Button>

        <Button
          variant="Success"
          style={{ marginLeft: "30px" }}
          onClick={() => changeFun()}
        >
          Click to change
        </Button>
      </Form>

      {arr.length > 0 ? (
        <Table striped bordered hover style={{ marginTop: "10px" }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>No.</th>
              <th>Email</th>
              <th>Name</th>
              <th>Address</th>
              <th style={{ backgroundColor: "red" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.email}</td>
                  <td>{e.name}</td>
                  <td>{e.address}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletHandler()}
                    >
                      Delete
                    </button>
                    <Button
                      color="primary"
                      className="ms-3"
                      onClick={() => updateFun(i, e)}
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}

export default MultipleInput;
