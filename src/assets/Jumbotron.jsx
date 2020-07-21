import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'

export const Jumbotron = () => (
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <h1>Hello, you!</h1>
            <br></br>
            <h2>Welcome to my portfolio!</h2>
        </Container>
    </Jumbo>
)