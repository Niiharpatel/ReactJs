import React, { useState } from 'react'

function InputCom() {

    let [name, setName] = useState("");
    let [arr, setArr] = useState([]);
                             

    function getData(e) {
        setName(e.target.value);
    }

    function addData() {
        setArr([...arr, name]);
        setName("");
    }

    return (
        <>
            <label htmlFor="">Name: </label>
            <input type="text" id='name' value={name} placeholder='Please Enter Your Name' onChange={(e) => getData(e)} />

            <button onClick={() => addData()}>Add Name</button>
            
            {
                arr.map((e, i) => {
                    return <h1 key={i}>{e}</h1>
                })
            }

            <h1>{name}</h1>

        </>
    )
}

export default InputCom