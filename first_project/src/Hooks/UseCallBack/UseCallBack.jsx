import React, { useCallback, useState } from 'react';
import { Button } from 'reactstrap';
import ListCom from './ListCom';

export default function UseCallBack() {

    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0);

    let fun = useCallback(() => {

        for (let i = 0; i < 1000000000; i++) { }
        return [count, count + 1, count + 2];

    }, [count]);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh", gap: "10px" }}>

                <h1>
                    useCallBack
                </h1>

                <h1>
                    {count}
                </h1>

                <h1>{count2}</h1>

                <Button
                    color="primary"
                    outline
                    onClick={() => setCount(++count)}
                >
                    Count-1
                </Button>

                <Button
                    color="primary"
                    outline
                    onClick={() => setCount2(++count2)}
                >
                    Count-2
                </Button>

                <ListCom fun={fun} />
            </div>
        </>
    );
}
