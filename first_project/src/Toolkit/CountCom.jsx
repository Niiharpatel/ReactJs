import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, reset } from "./features/count/countSlice";
import { Button } from "react-bootstrap";

export default function CountCom() {
  const count = useSelector((state) => {
    return state.COUNT;
  });

  let dispatch = useDispatch();

  return (
    <>
      <h1>Count is: {count.count}</h1>

      <Button onClick={() => dispatch(increment())} className="me-3">
        INC
      </Button>

      <Button onClick={() => dispatch(decrement())} className="me-3">
        DEC
      </Button>

      <Button onClick={() => dispatch(reset())}>RES</Button>
    </>
  );
}
