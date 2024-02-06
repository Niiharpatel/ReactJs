import React, { useEffect, useState } from 'react';

export default function ListCom({ fun }) {

    let [arr, setArr] = useState();

    useEffect(() => {
        setArr(fun());
    }, [fun]);
    return (
        <>
            <h1>List Com</h1>

            {
                arr?.map((e) => {
                    return <h2>{e}</h2>;
                })
            }
        </>
    );
}
