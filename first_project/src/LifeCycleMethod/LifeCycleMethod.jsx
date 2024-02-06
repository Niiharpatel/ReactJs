import React, { Component } from 'react';
import Unmount from './Unmount';

class LifeCycleMethod extends Component {
    constructor() {
        super();

        console.log("====== constructor ======")

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("============== componentDidMount ==============")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevState);

        if (this.state.count === 10) {
            let x = confirm('You want to continue');
            !x ? this.setState({ count: 0 }) : null;

        }

    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        console.log("========= Render =========");
        return (
            <> <div style={{ textAlign: "center" }}>
                <h1>Hello there!</h1>
                <h1>{this.state.count}</h1>

                {this.state.count < 5 ? <Unmount /> : null}

                <button onClick={() => this.increment()}>CLick Me</button>
            </div>
            </>
        );
    }
}

export default LifeCycleMethod;