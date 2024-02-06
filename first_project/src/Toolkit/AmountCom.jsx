import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/amount/amountSlice";

export default function AmountCom() {
  const amount = useSelector((state) => state.AMOUNT);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Amount is: {amount.amount}</h1>
      <Button onClick={() => dispatch(increment())} className="me-3">
        Amt Inc
      </Button>

      <Button onClick={() => dispatch(decrement())} className="me-3">
        Amt Dec
      </Button>

      <Button onClick={() => dispatch(reset())}>Reset</Button>
    </>
  );
}
