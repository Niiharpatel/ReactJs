import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from './Features/userSlice';
import { Table } from 'reactstrap';

function User() {
  // ============== CREATE ================

  const [data, setData] = useState({
    name: '',
    pass: '',
  });

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //   ============== READ =================
  const dispatch = useDispatch();

  const addUser = () => {
    dispatch(addData(data));
    setData({
      name: '',
      pass: '',
    });
  };

  const usersData = useSelector((state) => {
    return state?.USER?.users;
  });

  //   ================ UPDATE ==================
  const [ind, setInd] = useState(null);

  const editFun = (ele, ind) => {
    setData(ele);
    setInd(ind);
  };

  const updateUser = () => {
    dispatch(updateData({ newData: data, ind }));
    setData({
      name: '',
      pass: '',
    });
    setInd(null);
  };

  //   ================ Delete ==================

  const delFun = (ind) => {
    dispatch(deleteData(ind));
  };

  return (
    <>
      <h1>CRUD WITH RTK</h1>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={inputHandler}
        />
      </div>
      <div>
        <label htmlFor="pass">Password: </label>
        <input
          type="text"
          id="pass"
          name="pass"
          value={data.pass}
          onChange={inputHandler}
        />
      </div>
      {/* <h1>{data.name}</h1>
      <h1>{data.pass}</h1> */}

      {ind ? (
        <button onClick={() => updateUser()}>Update</button>
      ) : (
        <button onClick={() => addUser()}>Add</button>
      )}

      {/* =========================================================== */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {usersData?.map((ele, ind) => {
            return (
              <tr key={ind}>
                <th scope="row">{ind + 1}</th>
                <td>{ele.name}</td>
                <td>{ele.pass}</td>
                <td>
                  <button onClick={() => editFun(ele, ind)}>Edit</button>
                  <button onClick={() => delFun(ind)}>Delete</button>
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
