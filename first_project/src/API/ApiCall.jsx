import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Table } from 'react-bootstrap';

function ApiCall() {

    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log("----->Error", err.message);
        }, [])

    }
    )
    return (
        <>
            <h1>Api Call</h1>

            <Table striped bordered hover style={{ marginTop: "10px" }}>
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, i) => {
                        return (
                            <tr key={i.id}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.address.city}</td>
                            </tr>)
                    })}

                </tbody>
            </Table>
        </>
    )
}

export default ApiCall