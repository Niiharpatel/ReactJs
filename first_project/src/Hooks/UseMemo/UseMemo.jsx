import React, { useMemo, useState } from 'react';
import { Button } from 'reactstrap';

export default function UseMemo() {

    let [count, setcount] = useState(0);
    let [black, SetBlack] = useState(false);

    let x = useMemo(() => {
        for (let i = 0; i < 1000000000; i++) { }

        return count * 1000;
    }, [count]);

    function changeColor() {

        SetBlack(!black);

    }

    count;
    return (
        <>
            <div style={{
                height: "100vh",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center", flexDirection: "column"
            }}>


                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: black ? "white" : "black",
                    backgroundColor: !black ? "white" : "black", border: "1px solid black",
                    height: "100px",
                    width: "100px"
                }}>
                    <h1>{x}</h1>
                </div>

                <h1>UseMemo</h1>

                <h1>{count}</h1>


                <Button
                    color="primary"
                    outline
                    onClick={() => setcount(++count)}
                >
                    Count-1
                </Button>

                <Button
                    color="primary"
                    outline
                    onClick={() => changeColor()}
                >
                    Click to Change
                </Button>
            </div>
        </>
    );
}
