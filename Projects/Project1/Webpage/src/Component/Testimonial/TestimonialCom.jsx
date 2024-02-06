import React from 'react';
import './TestimonialCom.css';

function TestimonialCom(props) {
    return (
        <>

            <div className="testi-main">
                <div className="testi-quote">
                    <i className="fa-solid fa-quote-left"></i>
                </div>
                <dir className='comments'>
                    <p>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</p>
                </dir>
                <div className="user-box">
                    <div className="user-pic-middle">
                        <div className="user-pic">
                            <img src={props?.getData?.img} alt="" />
                        </div>
                    </div>
                    <div className="user-name">
                        <p>{props?.getData?.name}</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default TestimonialCom;