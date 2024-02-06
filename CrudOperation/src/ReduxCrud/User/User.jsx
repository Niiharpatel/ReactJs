import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../Features/userSlice";
import { Button, Table } from "reactstrap";

function User() {
  // =============== CREATE ============
  let [user, setUser] = useState({
    name: "",
    city: "",
  });

  // =============== READ ==============

  let dispatch = useDispatch();

  const addToTable = (e) => {
    e.preventDefault();

    dispatch(addUser(user));
    setUser({
      name: "",
      city: "",
    });
  };

  let data = useSelector((state) => {
    return state.USER.users;
  });

  // =============== Update ==============
  let [ind, setInd] = useState(null);

  const editFun = (data, index) => {
    setUser(data);
    setInd(index);
  };

  const updateToTable = () => {
    dispatch(updateUser({ newData: user, ind }));
    setUser({
      name: "",
      city: "",
    });
    setInd(null);
  };

  // =============== Delete ==============

  const delFun = (i) => {
    dispatch(deleteUser(i));
  };

  return (
    <>
      <form onSubmit={addToTable}>
        <label>Name:</label>
        <input
          type="text"
          value={user.name}
          name="name"
          onChange={(e) => setUser({ ...user, name: e?.target?.value })}
        />
        <label>City:</label>
        <input
          type="text"
          value={user.city}
          name="city"
          onChange={(e) => setUser({ ...user, city: e?.target?.value })}
        />
        <br />
        <br />
        <button>add</button> <br />
        <br />
      </form>

      <button onClick={() => updateToTable()}>update</button>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.city}</td>
                <td>
                  <Button onClick={() => editFun(e, i)}>Edit</Button>
                  <Button onClick={() => delFun(i)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default User;
