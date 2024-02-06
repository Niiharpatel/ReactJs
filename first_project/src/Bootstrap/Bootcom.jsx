import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./card.css"

function Bootcom() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://images.pexels.com/photos/399946/pexels-photo-399946.jpeg?auto=compress&cs=tinysrgb&w=600"} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Hello user this is card using react bootstrap.
                    </Card.Text>
                    <Button variant="primary">Hello!</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Bootcom