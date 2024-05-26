import React from 'react';
import { useState } from 'react';
import { Button, Table } from 'reactstrap';

function SimplCrud() {
  // ============ CREAT ========================
  const [state, setState] = useState({
    name: '',
    city: '',
  });

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // ================ READ ========================
  let [arr, setArr] = useState([]);

  const setData = () => {
    setArr([...arr, state]);
    setState({
      name: '',
      city: '',
    });
  };

  // ================= UPDATE ========================

  let [ind, setInd] = useState(null);

  const editFun = (data, index) => {
    setState(data);
    setInd(index);
  };

  const updateData = () => {
    if (ind || ind === 0) {
      arr.splice(ind, 1, state);
      setState({
        name: '',
        city: '',
      });
      setInd(null);
    }
  };

  // ================= DELETE ========================

  const deleteFun = (i) => {
    arr.splice(i, 1);
    setArr([...arr]);
  };

  const delAll = () => {
    setArr([]);
    setInd(null);
  };
  return (
    <>
      <h1>Crud Operation</h1>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        value={state?.name}
        name="name"
        onChange={inputHandler}
        // onChange={(e) => setState({ ...state, name: e?.target?.value })}
      />
      <br />
      <br />
      <label htmlFor="">City: </label>
      <input
        type="text"
        value={state?.city}
        name="city"
        onChange={inputHandler}

        // onChange={(e) => setState({ ...state, city: e?.target?.value })}
      />
      {/* <h1>{state.name}</h1>
      <h1>{state.city}</h1> */}

      {ind !== 'null' ? (
        <button onClick={() => updateData()}>Update</button>
      ) : (
        <button onClick={() => setData()}>Submit</button>
      )}
      <button onClick={() => delAll()}>DelAll</button>

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
          {arr?.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.city}</td>
                <td>
                  <Button onClick={() => editFun(e, i)}>Edit</Button>
                  <Button onClick={() => deleteFun(i)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default SimplCrud;
