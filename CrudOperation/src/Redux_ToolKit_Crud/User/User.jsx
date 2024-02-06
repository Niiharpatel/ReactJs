import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { addUser, removeUser, updateUser } from "../Features/userSlice";

export default function User() {
  //========================= CREATE ===========================
  let [name, setName] = useState({
    name: "",
    city: "",
  });

  //========================= READ ===========================

  let dispatch = useDispatch();

  function addToTable() {
    dispatch(addUser(name));
    setName({
      name: "",
      city: "",
    });
  }

  let data = useSelector((state) => {
    return state?.USER.users;
  });

  //========================= UPDATE ===========================

  let [ind, setInd] = useState(null);

  function editFun(data, index) {
    setName(data);
    setInd(index);
  }

  function updateToTable() {
    dispatch(updateUser({ newData: name, ind }));
    setName({
      name: "",
      city: "",
    });
    setInd(null);
  }

  //========================= DELETE ===========================

  function deleteFun(ind) {
    dispatch(removeUser(ind));
  }

  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        onChange={(e) => setName({ ...name, name: e.target.value })}
        value={name?.name}
        name="name"
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        onChange={(e) => setName({ ...name, city: e.target.value })}
        value={name?.city}
        name="city"
      />

      <button onClick={() => addToTable()}>Add</button>
      <button onClick={() => updateToTable()}>Update</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>
                  <button onClick={() => editFun(e, i)}>Edit</button>
                  <button onClick={() => deleteFun(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
