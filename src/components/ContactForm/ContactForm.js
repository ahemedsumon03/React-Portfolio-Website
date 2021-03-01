import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Wentwrong from "../Wentwrong/Wentwrong";

class ContactForm extends Component {

    constructor() {
        super();
        this.state = {
            address:"",
            email:"",
            phone:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.selcetvalue).then(result=>{

            if(result == null)
            {
                this.setState({error:true})
            }
            else {
                this.setState({
                    address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone']
                })
            }

        }).catch(error=>{
            this.setState({
                error:true
            })
        })
    }

    sendData=()=>{
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        let jsonData={
            name:name,
            email:email,
            message:message
        }

        let config={
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }

        RestClient.postRequest(AppURL.senddata,JSON.stringify(jsonData),config).then(result=>{
            alert(result);
        }).catch(error=>{
            alert(error);
        })

    }

    render() {

        if(this.state.error===false)
        {
            return (
                <Fragment>
                    <div className='mt-5'>
                        <Container>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className='serviceName'>Quick Connect</h1>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label className='serviceDescription'>Name</Form.Label>
                                            <Form.Control id='name' type="text"/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className='serviceDescription'>Email Address</Form.Label>
                                            <Form.Control id='email' type="email" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className='serviceDescription'>Message</Form.Label>
                                            <Form.Control id='message' as="textarea" rows="3" />
                                        </Form.Group>
                                        <Button variant="primary" onClick={this.sendData}>
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className='serviceName discuss'>Discuss Now</h1>
                                    <p className='FooterDes'>{this.state.address}</p><p></p>
                                    <p className='FooterDes'><FontAwesomeIcon icon={faEnvelope}/> {this.state.email}</p><p></p>
                                    <p className='FooterDes'><FontAwesomeIcon icon={faPhone}/> {this.state.phone}</p>
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

export default ContactForm;