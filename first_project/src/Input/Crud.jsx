import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default function Crud() {
  let [data, setData] = useState({
    name: "",
    city: "",
  });

  function GetData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  let [arr, setArr] = useState([]);

  function addData() {
    setArr([...arr, data]);

    setData({
      name: "",
      city: "",
    });
  }

  let [ind, setIndex] = useState(null);

  function editFun(index, data) {
    setData(data);
    setIndex(index);
  }

  function updateFun() {
    if (ind || ind === 0) {
      arr.splice(ind, 1, data);
      setArr([...arr]);
      setData({
        name: "",
        city: "",
      });

      setIndex(null);
    }
  }

  function deleteHandler(index) {
    arr.splice(ind, 1);
    setArr([...arr]);
  }

  function delAllFun() {
    setArr([]);
    setData({
      name: "",
      city: "",
    });
  }

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={data.name}
        name="name"
        onChange={(e) => GetData(e)}
      />
      <label htmlFor="name">City:</label>
      <input
        type="text"
        onChange={(e) => GetData(e)}
        value={data.city}
        name="city"
      />

      {/* <h1>{data.name}</h1>
      <h1>{data.city}</h1>  */}

      <button onClick={() => addData()}>Submit</button>
      <button onClick={() => updateFun()}>Update</button>
      <button onClick={() => delAllFun()}>DeleteAll</button>

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
          {arr.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>
                  <button onClick={() => editFun(i, e)}>edit</button>
                  <button onClick={() => deleteHandler()}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
