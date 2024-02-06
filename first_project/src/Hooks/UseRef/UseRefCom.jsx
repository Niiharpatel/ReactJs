import React, { useRef } from 'react';

export default function UseRefCom() {

    const InputRef = useRef(null);
    const ColorRef = useRef(null);

    function ClickHandle() {
        InputRef.current.value = InputRef.current.value + "Nihar";
        InputRef.current.focus();

    }

    function ColorChange() {
        ColorRef.current.style.backgroundColor = 'red';
    }

    return (
        <>
            <h1>UseRef</h1>

            <input type="text" ref={InputRef} />

            <button onClick={() => ClickHandle()}>Click Me</button>


            {/* ====================================================== */}
            <h1 style={{ marginTop: "50px" }}>Color Ref</h1>

            <div style={{ height: "100px", width: "100px", border: "1px solid black", marginBottom: "10px" }} ref={ColorRef}></div>

            <button onClick={() => ColorChange()}>Click Here</button>

        </>
    );
}
