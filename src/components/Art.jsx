import React from 'react'
import { Container, Row, Col } from 'reactstrap';


export default function Art(props) {
    return (
        <Container className="art-cont">
            <Row>
                <Col>
                    <a href={props.artlink}>
                        <img src={props.artimg} className="art-img" alt={props.imgalt}></img>
                    </a>
                </Col>
                <Col>
                    <a href={props.artlink} className="art-info">
                        <h2>{props.arttitle}</h2>
                        <h6>{props.artdesc}</h6>
                        <h5>{props.artauthor}</h5>
                        <h6>{props.artdate}</h6>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}