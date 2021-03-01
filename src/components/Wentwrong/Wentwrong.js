import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import image from '../../asset/image/error.svg'

class Wentwrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col>
                           <img className='loaderImage' src={image}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Wentwrong;