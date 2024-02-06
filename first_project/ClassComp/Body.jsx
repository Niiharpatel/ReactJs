import React from "react";
import "./Body.css";


class Body extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="sidebar">SideBar</div>
                <div className="maincontent">MainContent</div>                
            </div>
        );
    }
}

export default Body;