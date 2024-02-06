import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { dec, inc } from './Amount/Action';

function amountCom(props) {
    return (
        <>

            <h1>AmountCom</h1>
            <h1>Amount Is : {props.amount}</h1>

            <Button
                className="mt-2"
                variant="success"
                onClick={() => props?.add(inc())}
            >
                Increment
            </Button>

            <Button
                className="mt-2 "
                variant="danger"
                onClick={() => props?.add(dec())}
            >
                Decrement
            </Button>

        </>
    );
}

const toStateToProps = (state) => {
    return {
        amount: state?.AMOUNT.amount
    };
};

const toDispatchToProps = (dispatch) => {
    return {
        add: (action) => dispatch(action)
    };
};

export default connect(toStateToProps, toDispatchToProps)(amountCom);