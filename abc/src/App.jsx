import { useState } from 'react';
import './App.css';
import { Table } from 'reactstrap';

function App() {
  // ============= CREATE ===================

  const [user, setUser] = useState({
    name: '',
    pass: '',
  });

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // ============== READ ======================

  const [arr, setArr] = useState([]);

  const addData = () => {
    setArr([...arr, user]);
    setUser({
      name: '',
      pass: '',
    });
  };

  // ============== Update ======================

  const [ind, setInd] = useState(null);

  const editUser = (ele, ind) => {
    setUser(ele);
    setInd(ind);
  };

  const updateData = () => {
    if (ind || ind === 0) {
      arr.splice(ind, 1, user);
      setUser({
        name: '',
        pass: '',
      });

      setInd(null);
    }
  };

  // ============== delete ======================

  const delUser = (ind) => {
    arr.splice(ind, 1);
    setArr([...arr]);
  };

  return (
    <>
      <h1>CRUD OPERATION</h1>
      <div>
        <label htmlFor="name">Name</label> &nbsp;
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={inputHandler}
        />
      </div>
      <div>
        <label htmlFor="pass">passWord</label> &nbsp;
        <input
          type="text"
          id="pass"
          name="pass"
          value={user.pass}
          onChange={inputHandler}
        />
      </div>

      {ind ? (
        <button onClick={() => updateData()}>Update</button>
      ) : (
        <button onClick={() => addData()}>AddData</button>
      )}
      {/* <h1>{user?.name}</h1>
      <h1>{user?.pass}</h1> */}

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
          {arr?.map((ele, ind) => {
            return (
              <tr key={ind}>
                <th scope="row">{ind + 1}</th>
                <td>{ele.name}</td>
                <td>{ele.pass}</td>
                <td>
                  <button onClick={() => editUser(ele, ind)}>Edit</button>
                  <button onClick={() => delUser(ind)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default App;
