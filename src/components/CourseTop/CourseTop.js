import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class CourseTop extends Component {

    constructor(props) {
        super();
        this.state = {
            title:props.pagetitle
        }
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className='topAboutImage p-0'>
                    <div className='topAboutOverlay'>
                        <Container className='topAboutContent'>
                            <Row>
                                <Col className='text-center'>
                                    <h1 className='topAboutTitle'>{this.state.title}</h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default CourseTop;