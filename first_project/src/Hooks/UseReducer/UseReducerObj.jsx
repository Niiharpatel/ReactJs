import React, { useReducer } from 'react';



let initialValue = { num: 0 };

const reducer = (state, action) => {

    switch (action.type) {

        case "inc":
            return { num: state.num + action.x };

        case "dec":
            return { num: state.num - action.x };

        case "res":
            return { num: 0 };



        default:
            break;
    }
};



export default function UseReducerObj() {
    let [count, dispatch] = useReducer(reducer, initialValue);
    return (
        <>
            <h1>Count : {count.num}</h1>

            <button onClick={() => dispatch({ type: "inc", x: 5 })}>Increment</button> {"   "}
            <button onClick={() => dispatch({ type: "dec", x: 1 })}>Decrement</button> {"   "}
            <button onClick={() => dispatch({ type: "res" })}>Reset</button>
        </>
    );
}
