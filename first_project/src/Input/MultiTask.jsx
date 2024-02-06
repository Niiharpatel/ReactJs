import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Table } from 'reactstrap'

function MultiTask() {

    let [data, setData] = useState({
        cname: "",
        website: "",
        address: "",
        type: "",
        area: "",
        gender: ""
    })

    let [arr, setArr] = useState([]);

    let [ind, setIndex] = useState(null);

    let [isChecked, setIsChecked] = useState(false)

    function showText(e) {
        console.log("=========", e.target.value);

        setData({ ...data, [e.target.name]: e.target.value });

    }

    function addData() {
        if (data.cname.length > 0 && data.website.length > 0 && data.address.length > 0 && data.type.length > 0) {

            setArr([...arr, data])
            setData({
                cname: "",
                website: "",
                address: "",
                type: "",
                area: "",
                gender: ""
            })

        } else {
            alert("Please Fill Up Form!")
        }

    }

    function deletHandler(index) {
        arr.splice(index, 1);
        setArr([...arr]);

    }

    function delAll() {
        setArr([]);
        setData({
            cname: "",
            website: "",
            address: "",
            type: "",
            gender: "",
            area: ""

        })
    }

    function updateFun(index, data) {
        setData(data);
        setIndex(index);

    }

    function changeFun() {
        if (ind || ind === 0) {

            arr.splice(ind, 1, data);
            setArr([...arr]);
            setData({
                cname: "",
                website: "",
                address: "",
                type: "",
                gender: "",
                area: ""

            });
            setIndex(null);
        }
    }

    function checkBox(e) {
        if (e.target.isChecked == true) {

        } else if (e.target.checked == 'Female') {

        }

    }

    return (
        <>
            <Form style={{ width: "fit-content", margin: "auto", marginTop: "20px" }}>
                <FormGroup row>
                    <Label
                        for="exampleName"
                        sm={2}
                    >
                        Name
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleName"
                            name="cname"
                            value={data.cname}
                            type="text"
                            placeholder='Enter Company Name'
                            onChange={(e) => showText(e)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label
                        for="exampleWebsite"
                        sm={2}
                    >
                        Website
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleWebsite"
                            placeholder='Enter Website'
                            name="website"
                            value={data.website}
                            type="text"
                            onChange={(e) => showText(e)}

                        />
                    </Col>
                </FormGroup>


                <FormGroup row>
                    <Label
                        for="exampleText"
                        sm={2}
                    >
                        Address
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleText"
                            placeholder='Enter Address'
                            name="address"
                            value={data.address}
                            type="text"
                            onChange={(e) => showText(e)}

                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label
                        for="exampleType"
                        sm={2}
                    >
                        Type
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleType"
                            placeholder='Enter Type of company'
                            name="type"
                            value={data.type}
                            type="text"
                            onChange={(e) => showText(e)}

                        />
                    </Col>
                </FormGroup>

                <FormGroup style={{ display: "flex", gap: "52px", alignItems: "center" }}>
                    <Label for="exampleArea">
                        Area
                    </Label>
                    <Input
                        id="exampleArea"
                        name="area"
                        type="select"
                        value={data.area}
                        onChange={(e) => showText(e)}
                    >
                        <option>
                            --- Please select area ---
                        </option>
                        <option>
                            India
                        </option>
                        <option>
                            America
                        </option>
                        <option>
                            China
                        </option>
                        <option>
                            UK
                        </option>
                        <option>
                            UAE
                        </option>
                    </Input>
                </FormGroup>

                <div style={{ marginInlineStart: "86px", marginBlockEnd: "15px" }}>
                    <FormGroup
                        check
                        inline
                    >

                        <Input type="checkbox" value={data.male} name='gender' onChange={() => checkBox()} />
                        <Label check>
                            Male
                        </Label>
                    </FormGroup>
                    <FormGroup
                        check
                        inline
                    >
                        <Input type="checkbox" name='gender' value={data.female} onChange={() => checkBox()} />
                        <Label check>
                            Female
                        </Label>
                    </FormGroup>
                </div>



                <FormGroup
                    check
                    row
                >
                    <Col className='d-flex'
                        sm={{
                            offset: 2,
                            size: 10
                        }}
                    >
                        <Button color="primary" onClick={() => addData()}>
                            Submit
                        </Button>

                        <Button color="primary" className='ms-3' onClick={() => delAll()}>
                            DeleteAll
                        </Button>

                        <Button variant="Success" style={{ marginLeft: "30px", width: "250px" }} onClick={() => changeFun()}>Click to change</Button>

                    </Col>
                </FormGroup>


            </Form >

            {
                arr.length > 0 ? (<Table striped bordered hover style={{ marginTop: "10px" }}>
                    <thead>
                        <tr style={{ textAlign: "center" }}>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Website</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Area</th>
                            <th>Gender</th>
                            <th style={{ backgroundColor: "red" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.cname}</td>
                                    <td>{e.website}</td>
                                    <td>{e.address}</td>
                                    <td>{e.type}</td>
                                    <td>{e.area}</td>
                                    <td>{e.target.gender}</td>

                                    <td><button className='btn btn-danger' onClick={() => deletHandler()}>Delete</button>
                                        <Button color="primary" className='ms-3' onClick={() => updateFun(i, e)}>
                                            Update
                                        </Button>
                                    </td>
                                </tr>)
                        })}

                    </tbody>
                </Table>) : null
            }

        </>
    )
}

export default MultiTask