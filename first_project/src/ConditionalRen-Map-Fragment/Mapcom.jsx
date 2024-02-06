import React from "react";
import Card from "./Card";

let data = [{
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
    ProductName: "Titan",
    Price: "2999",
    Description: "Watch"
}, {
    img: "https://images.pexels.com/photos/9423283/pexels-photo-9423283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ProductName: "Fossil",
    Price: "1999",
    Description: "Watch"
}, {
    img: "https://images.pexels.com/photos/266666/pexels-photo-266666.jpeg?auto=compress&cs=tinysrgb&w=600",
    ProductName: "Casio",
    Price: "3999",
    Description: "Watch"
}]

function Mapcom() {
    return (
        <>
            {data.map((e, i) => {
                return <Card cardData={e} key={i} />;
          })}
        </>
    );
}

export default Mapcom