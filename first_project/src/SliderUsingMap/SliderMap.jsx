import React from 'react'
import TestSlider from './TestSlider'
import Carousel from 'react-bootstrap/Carousel';

let data = [{
    img: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "slider-1",
    description: "loream"
}, {
    img: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "slider-2",
    description: "loream"
}, {
    img: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "slider-3",
    description: "loream"
}]

function SliderMap() {
    return (
        <>
            <div className='w-100'>
                <Carousel>

                    {data.map((e, i) => {
                        // return <TestSlider getInfo={e} key={i} />
                        return <Carousel.Item>
                            <img style={{ height: '100vh', width: "100vw", objectFit: "cover" }} src={e?.img} />
                            <Carousel.Caption>
                                <h3>{e?.name}</h3>
                                <p>{e?.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default SliderMap