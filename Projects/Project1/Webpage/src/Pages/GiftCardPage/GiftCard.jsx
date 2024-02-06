import React from 'react';
import './GiftCard.css';
import { useNavigate } from 'react-router';

export default function GiftCard() {

    const Navigate = useNavigate();
    return (
        <>
            <div className="giftcard-mar">

                <div className="gift-card-bgimg">
                    <div className="container">

                        <div className="giftcard-main">
                            <div className="giftcard-content-fix">
                                <div className="giftcard-bg">

                                    <h1 style={{ paddingBottom: "20px", textAlign: "center", fontFamily: "auto", letterSpacing: "5px" }}>GIFT CARD</h1>

                                    <div className="gift-line2" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "90px", paddingBottom: "10px" }}>
                                        <div  > <label htmlFor="" style={{ fontWeight: "bold" }}>To:</label></div>
                                        <div > <input type="text" style={{ borderTop: "transparent", borderRight: "transparent", borderLeft: "transparent", backgroundColor: "transparent", outline: "none", borderBottom: "1px solid black", width: "250px" }} /></div>
                                    </div>

                                    <div className="gift-line2" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "69px", paddingBottom: "10px" }}>
                                        <div> <label htmlFor="" style={{ fontWeight: "bold" }}>From:</label></div>
                                        <div> <input type="text" style={{ borderTop: "transparent", borderRight: "transparent", borderLeft: "transparent", backgroundColor: "transparent", outline: "none", borderBottom: "1px solid black", width: "250px" }} /></div>

                                    </div>

                                    <div className="gift-line2" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "48px", paddingBottom: "10px" }}>
                                        <div > <label htmlFor="" style={{ fontWeight: "bold" }}>Amount:</label></div>
                                        <div> <input type="text" style={{ borderTop: "transparent", borderRight: "transparent", borderLeft: "transparent", backgroundColor: "transparent", outline: "none", borderBottom: "1px solid black", width: "250px" }} /></div>

                                    </div>

                                    <div className="gift-line2" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "69px" }}>
                                        <div> <label htmlFor="" style={{ fontWeight: "bold" }}>Code:</label></div>
                                        <div> <input type="text" style={{ borderTop: "transparent", borderRight: "transparent", borderLeft: "transparent", backgroundColor: "transparent", outline: "none", borderBottom: "1px solid black", width: "250px" }} /></div>

                                    </div>

                                    <div className="giftcard-btn">
                                        <button className='btn' onClick={() => Navigate('/')}>
                                            Create Card
                                        </button>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
