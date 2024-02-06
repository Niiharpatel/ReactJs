import React, { useEffect, useState } from 'react'

function UseEffect() {

    let [count, setCount] = useState(0);

    function incre() {
        setCount(count + 1);
    }


    useEffect(() => {
        console.log("------- UseEffect - 1 (no dependency) -------");  // call every time when we change somthing
    })
    

    useEffect(() => {
        console.log("------- UseEffect - 2 (blank dependency) -------"); // call only first time..
    }, [])


    useEffect(() => {
        console.log("------- UseEffect - 3 (with dependency) -------");

        alert("You reached the limit!")// call only when the condition of dependency fulfill..

    }, [count > 10])


    return (
        <>
            <h1>Hello User this is useEffect</h1>

            <h1>{`=> ${count}`}</h1>
            <button className='btn btn-success' onClick={() => incre()}>Hello there !</button>
        </>


    )
}

export default UseEffect