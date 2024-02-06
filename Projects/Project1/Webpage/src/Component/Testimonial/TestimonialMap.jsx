import React from 'react'
import TestimonialCom from './TestimonialCom';
import './TestimonialCom.css'

let data = [{
    img: "https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-testimonial-avatar-img.jpg",
    name: "JENNIFER LEWIS"
},
{
    img: "https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-testimonials-avatar-img-2.jpg",
    name: "ALICIA HEART"
}, {
    img: "https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-testimonials-avatar-img-1.jpg",
    name: "JUAN CARLOS"
}]

function TestimonialMap() {
    return (
        <>
            <div className="testimonial-bg">
                <div className="testimonial-heading">
                    <h2>What Our Customers Say</h2>
                </div>
                <div className="testimonial-flex">
                    {data?.map((e, i) => {
                        return <TestimonialCom key={i} getData={e} />
                    })}
                </div>
            </div>

        </>
    )
}

export default TestimonialMap