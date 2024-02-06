import React, { useState } from 'react'

function Task() {
    let [actor, setActor] = useState("");
    let [ans, setAns] = useState([]);

    function fun1(x) {

        setActor(x.target.value);

    }

    function fun2() {
        setAns([...ans, actor]);
        setActor("");

    }

    return (
        <>
            <label htmlFor="">Enter Name:</label>
            <input type="text" id='in' value={actor} onChange={(x) => fun1(x)} />

            <button onClick={() => fun2()}>CLick to add</button>

            {ans.map((a, b) => {
                return <h1 key={b}>{a}</h1>
            })}

            <h1>{actor}</h1>

        </>
    )
}

export default Task