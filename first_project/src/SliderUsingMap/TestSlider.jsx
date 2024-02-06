import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function TestSlider(props) {
    console.log(props.getInfo)
    return (

        <>
            
            <Carousel.Item>
                <img style={{ height: '100px', width: "100px", objectFit: "cover" }} src={props?.getInfo?.img} />
                <Carousel.Caption>
                    <h3>{props?.getInfo?.name}</h3>
                    <p>{props?.getInfo?.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </>
    )
}

export default TestSlider