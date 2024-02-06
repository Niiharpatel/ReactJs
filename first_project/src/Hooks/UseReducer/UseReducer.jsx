import React, { useReducer } from 'react';

let initialValue = 0;
const reducer = (state, action) => {

    switch (action) {
        case "inc":
            return state + 1;
        
        case "dec":
            return state - 1;
        
        case "res":
            return 0;


        default:
            break;
    }
};

export default function UseReducer() {

    let [count, dispatch] = useReducer(reducer, initialValue);
    return (
        <>
            <h1>Count : {count}</h1>

            <button onClick={() => dispatch("inc")}>Increment</button> {"   "}
            <button onClick={() => dispatch("dec")}>Decrement</button> {"   "}
            <button onClick={() => dispatch("res")}>Reset</button>
        </>
    );
}
