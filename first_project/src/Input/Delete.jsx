import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';

function Delete() {

    let [name, setName] = useState("");
    let [arr, setArr] = useState([]);

    function getData(e) {
        setName(e.target.value);
    }

    function setData() {

        // setArr([...arr, name]);
        // setName("");

        // ================== OR ================================

        name.length > 0 ? (setArr([...arr, name]), setName("")):alert("Please enter name!")
    }

    // ==========================================   Delete  ============================================================

    function deletHandler(index) {
        arr.splice(index, 1,)
        setArr([...arr])
    }


    function deleteAllFun() {

        let ans = confirm("Are you sure want to delete all items?");

        ans == true ? setArr([]) : null;

        // document.getElementById('mess').innerText = "You Delete All Items!";

    }


    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "lightskyblue", padding: "25px" }}>
                <label htmlFor="" style={{ paddingRight: "5px", fontSize: "30px", fontWeight: "bold" }}>Name:</label>
                <input type="text" id='in' value={name} style={{ padding: "10px 100px", outline: "none" }} onChange={(e) => getData(e)} />

                <button className='btn btn-success' style={{ marginLeft: "5px" }} onClick={() => setData()}>Add name</button>

                <Button variant="dark" style={{ marginLeft: "30px" }} onClick={() => deleteAllFun()}>DeleteAll</Button>


                {/* ============== Conditional Rednoring =================================================== */}

                {arr.length > 0 ? (<Table striped bordered hover style={{ marginTop: "10px" }}>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th style={{ backgroundColor: "red" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e}</td>
                                    <td><button className='btn btn-danger' onClick={() => deletHandler()}>Delete</button></td>
                                </tr>)
                        })}

                    </tbody>
                </Table>) : null}

                {/* <h1 id='mess' style={{ color: "red", textAlign: "center", backgroundColor: "black", margin: "50px 0px" }}></h1> */}

            </div>
        </>
    )
}

export default Delete