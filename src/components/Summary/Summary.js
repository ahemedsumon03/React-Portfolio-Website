import React, {Component, Fragment} from 'react';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class Summary extends Component {

    constructor() {
        super();
        this.state = {
            project:"",
            client:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.totalprojectclient).then(result=>{

            if(result == null)
            {
                this.setState({error:true})
            }
            else {
                this.setState({project:result[0]['total_project'],client:result[0]['total_client'],loading:false});
            }
        }).catch(error=>{
            this.setState({error:true});
        })
    }

    render() {

        if(this.state.loading ===true)
        {
            return <Loading/>
        }else if (this.state.loading === false) {

            return (
                <Fragment>
                    <Container fluid={true} className='summarybannerimage p-0 summarySection'>
                        <div className='summaryBannerOverlay'>
                            <Container>
                                <Row>
                                    <Col className='text-center countSection' lg={4} md={6} sm={6}>
                                        <h1 className='summaryDigit'>

                                            <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>

                                        </h1>
                                        <h4 className='summaryCountdown'>Total Projects</h4>
                                        <hr className='bg-white w-25'></hr>
                                    </Col>

                                    <Col className='text-center countSection' lg={4} md={6} sm={6}>
                                        <h1 className='summaryDigit'>

                                            <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>

                                        </h1>
                                        <h4 className='summaryCountdown'>Total Clients</h4>
                                        <hr className='bg-white w-25'></hr>
                                    </Col>
                                    <Col lg={4} md={12} sm={12}>
                                        <Card className='summaryCard'>
                                            <Card.Body>
                                                <Card.Title className='cardTitle'>How i Work</Card.Title>
                                                <Card.Text>
                                                    <p className='cardSubTitle'><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'/> Requirement Gathering</p>
                                                    <p className='cardSubTitle'><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'/> System Analysis</p>
                                                    <p className='cardSubTitle'><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'/> Coding Testing</p>
                                                    <p className='cardSubTitle'><FontAwesomeIcon icon={faCheckCircle} className='iconBullet'/> Implementation</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </Fragment>
            );
        }
        else if(this.state.error === true)
        {
            return  <Wentwrong/>
        }

    }
}

export default Summary;