import React, { Component } from 'react';

class Unmount extends Component {
    componentWillUnmount() {
        console.log("===== componentWillUnmount =====");
        alert('Component is removing!')
    }
    render() {
        return (
            <div>
                <h1>Unmount</h1>
            </div>
        );
    }
}

export default Unmount;