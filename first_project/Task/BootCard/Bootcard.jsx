import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Bootcard(props) {
    return (
        <>
            <Card style={{ width: '18rem',margin:"20px 0px",boxShadow:"1px 1px 5px 5px" }}>
                <Card.Img variant="top" src={props?.CardData?.img}/>
                <Card.Body>
                    <Card.Title>{props?.CardData?.Name}</Card.Title>
                    <Card.Text>
                        {props?.CardData?.Description}
                    </Card.Text>
                    <Button variant="primary">Click for Info</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Bootcard