import React from 'react';
import ReactPlayer from 'react-player';
import './AboutPageCom2.css';

export default function AboutPageCom2() {
    return (
        <>
            <div className="com2-main">
                <div className="container">
                    <div className="video-div">
                        <ReactPlayer url='https://youtu.be/sVPYIRF9RCQ' controls={true} height='100vh' width='fit-to-content'/>
                    </div>
                </div>
            </div>

        </>
    );
}
