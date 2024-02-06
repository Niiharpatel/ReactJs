import React from 'react'
import "./Card.css";

function Card(props) {
    return (
        <>
            <div className="main">

                <img src={props?.cardData?.img} className='card_img' />

                <div className='card_det'>
                    <h3>Product Name:{props?.cardData?.ProductName}</h3>
                    <h3>Price:{props?.cardData?.Price}</h3>
                    <h3>Description:{props?.cardData?.Description}</h3>
                </div>
            </div>
        </>
    );
}

export default Card


//======================================== Props Destructuring ===========================================

// let props = { cardData: { ...e } };
// let { cardData } = props;

// export default function Card({ cardData }) {
//     return (
//         <>
//             <div className="main">

//                 <img className="card_img" src={cardData?.img} />

//                 <div className="card_det">
//                     <h3>Product Name : {cardData?.productName}</h3>
//                     <h3>Price: {cardData?.Price}</h3>
//                     <h3>Description : {cardData?.Description}</h3>
//                 </div>
//             </div>
//         </>
//     );
// }