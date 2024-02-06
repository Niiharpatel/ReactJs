import React, { useState } from "react";
import { Button, Table } from "reactstrap";

function Crud() {
  // ========== CREATE ===============
  let [state, setState] = useState({
    name: "",
    city: "",
  });

  // ================ READ =================
  let [arr, setArr] = useState([]);

  const addData = () => {
    setArr([...arr, state]);
    setState({
      name: "",
      city: "",
    });
  };

  // ================ UPDATE =================

  let [ind, setInd] = useState(null);

  const editFun = (e, i) => {
    setState(e);
    setInd(i);
  };

  const updateData = () => {
    if (ind || ind === 0) {
      arr.splice(ind, 1, state);
    }
    setArr([...arr]);
    setState({
      name: "",
      city: "",
    });
    setInd(null);
  };

  return (
    <>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter Name..."
        value={state?.name}
        name="name"
        onChange={(e) => setState({ ...state, name: e?.target?.value })}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter City..."
        value={state?.city}
        name="city"
        onChange={(e) => setState({ ...state, city: e?.target?.value })}
      />
      <br /> <br />
      <button
        className="text-white bg-indigo-500 border-0 py-2 mx-4 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={() => addData()}
      >
        Add
      </button>
      <button
        className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        onClick={() => updateData()}
      >
        Update
      </button>
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
          {arr?.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.city}</td>
                <td>
                  <Button onClick={() => editFun(e, i)}>edit</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Crud;
