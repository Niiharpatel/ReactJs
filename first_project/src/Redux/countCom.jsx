import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { decCount, incCount, incCountByVal } from './Count/Action';

function countCom(props) {

    let [number, setNumber] = useState("");

    function getNumber(e) {
        setNumber(e.target.value);
    }

    function addNumber() {
        props?.add_count(incCountByVal(+number));
        setNumber("");
    }

    return (
        <>
            <h1>CountCom</h1>
            <h1>Count Is : {props?.count}</h1>


            <Button
                className="mt-2"
                variant="success"
                onClick={() => props?.add_count(incCount())}

            >
                Increment
            </Button>


            <Button
                className="mt-2"
                variant="danger"
                onClick={() => props?.add_count(decCount())}

            >
                Decrement
            </Button>

            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", alignItems: "center" }}>
                <div>
                    <input type="number" value={number} onChange={(e) => getNumber(e)} />

                </div>

                <div>
                    <Button
                        className="mt-2"
                        variant="primary"
                        onClick={() => addNumber()}

                    >
                        Increment By Value
                    </Button>
                </div>


            </div>

        </>
    );
}


const toStateToProps = (state) => {
    return {
        count: state?.COUNT?.count
    };
};

const toDispatchToProps = (dispatch) => {
    return {
        add_count: dispatch
    };
};

export default connect(toStateToProps, toDispatchToProps)(countCom);

