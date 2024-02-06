import React from "react";
import { useState } from "react";
import { Table } from "reactstrap";

function ReduxCrud() {
  let [state, setState] = useState({
    name: "",
    city: "",
  });

  // ================== READ ==============
  let [arr, setArr] = useState([]);

  const addData = () => {
    setArr([...arr, state]);
    setState({
      name: "",
      city: "",
    });
  };

  // ================== UPdate ================
  let [ind, setInd] = useState(null);

  const editFun = (e, i) => {
    setState(e);
    setInd(i);
  };

  const updateData = () => {
    if (ind || ind == 0) {
      arr.splice(ind, 1, state);
    }
    setState({
      name: "",
      city: "",
    });
    setInd(null);
  };

  // ======================== DELETE ===================

  const delFun = (i) => {
    arr.splice(i, 1);
    setArr([...arr]);
  };

  return (
    <>
      <label htmlFor="">Name:</label>
      <input
        type="text"
        name="name"
        onChange={(e) => setState({ ...state, name: e.target.value })}
        value={state.name}
      />
      <label htmlFor="">City:</label>
      <input
        type="text"
        name="city"
        onChange={(e) => setState({ ...state, city: e.target.value })}
        value={state.city}
      />

      <button onClick={() => addData()}>ADD</button>
      <button onClick={() => updateData()}>Update</button>

      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>
                  <button onClick={() => editFun(e, i)}>edit</button>
                  <button onClick={() => delFun(i)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ReduxCrud;
