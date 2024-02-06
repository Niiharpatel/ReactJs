import React from 'react'

function MapKey() {
    let arr = ["Nihar", "Dharmin", "Hemaxi", "Nivya"];
    return (
        <>
            {arr.map((e, i) => {

                // return <h1>{e}</h1>;

                // =========== OR ==========

                return <h1 key={i}>{e}</h1>;
               
           })}
        </>
    )
}

export default MapKey