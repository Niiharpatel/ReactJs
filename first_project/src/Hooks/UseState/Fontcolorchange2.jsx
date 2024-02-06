import React, { useState } from 'react'

function Fontcolorchange2() {

    const [index, setindex] = useState(0);
    let arr = ["red", "green", "black", "yellow", "blue", "white"];

    function changetextColor() {
        if (index < 5) {
            setindex(index + 1);

        } else {

            setindex(0);
        }

    }
    return (
        <div>
            <h1 style={{color:arr[index]}}>My name is Niihar</h1>
            <button onClick={() => changetextColor()}>Change Color</button>

        </div>
    )
}

export default Fontcolorchange2