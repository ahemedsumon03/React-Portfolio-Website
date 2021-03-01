import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";
class Footer extends Component {

    constructor() {
        super();
        this.state = {
            address:"",
            email:"",
            phone:"",
            facebook:"",
            youtube:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.selcetvalue).then(result=>{

            if(result === null)
            {
                this.setState({error:true})
            }
            else {
                this.setState({
                    address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone'],
                    facebook:result[0]['facebook'],
                    youtube:result[0]['youtube'],
                    loading:false
                })
            }
        }).catch(error=>{
            this.setState({error:true})
        })
    }

    render() {

        if(this.state.loading === true)
        {
            return <Loading/>
        }

        else if(this.state.error === false)
        {
                return (
                    <Fragment>
                        <div className='FooterCard' style={{marginTop:'70px'}}>
                            <Container>
                                <Row className='mt-3 mb-3'>
                                    <Col lg={3} md={6} sm={12}>
                                        <h1 className='FooterTitle'>Follow Me</h1>
                                        <p className='FooterColumn'><a href={"//"+this.state.facebook} target="_blank" className='socialIcon'><FontAwesomeIcon icon={faFacebook} /> Facebook</a></p>
                                        <p  className='FooterColumn'><a href={"//"+this.state.youtube} target="_blank" className='socialIcon'><FontAwesomeIcon icon={faYoutube}/> YouTube</a></p>
                                    </Col>
                                    <Col lg={3} md={6} sm={12}>
                                        <h1 className='FooterTitle'>Address</h1>
                                        <p className='FooterDes'>{this.state.address}</p><p></p>
                                        <p className='FooterDes'><FontAwesomeIcon icon={faEnvelope}/> {this.state.email}</p><p></p>
                                        <p className='FooterDes'><FontAwesomeIcon icon={faPhone}/> {this.state.phone}</p>
                                    </Col>
                                    <Col lg={3} md={6} sm={12}>
                                        <h1 className='FooterTitle'>Information</h1>
                                        <p className='FooterDes'><Link to='/about' className='footerLink'>About Me</Link></p>
                                        <p className='FooterDes'><Link to='/contact' className='footerLink'>Contact Me</Link></p>
                                    </Col>
                                    <Col lg={3} md={6} sm={12}>
                                        <h1 className='FooterTitle'>Legal</h1>
                                        <p className='FooterDes'><Link to='/refund' className='footerLink'>Refund Policy</Link></p>
                                        <p className='FooterDes'><Link to='/terms' className='footerLink'>Terms And Condition</Link></p>
                                        <p className='FooterDes'><Link to='/privacy' className='footerLink'>Privacy Policy</Link></p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Fragment>
                );
        }
        else if(this.state.error === true)
        {
            return <Wentwrong/>
        }


    }
}

export default Footer;