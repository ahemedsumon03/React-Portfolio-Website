import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import grapicimage from '../../asset/image/graphics.c111184b.svg'
import mobileimage from '../../asset/image/mobile.b3cc87c3.svg'
import webimage from '../../asset/image/web.d45e6fbf.svg'
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class Service extends Component {

    constructor() {
        super();
        this.state = {
            demo:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.service).then(result=>{

            if(result == null)
            {
                this.setState({error:true})
            }
            else {
                this.setState({demo:result,loading:false})
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
        else  if(this.state.loading === false){


            const mylist = this.state.demo;

            const myview = mylist.map(mylist=>{
                return <Col lg={4} md={6} sm={12}>
                    <div className='service-card text-center'>
                        <img src={mylist.service_logo}/>
                        <h4 className='serviceName'>{mylist.service_name}</h4>
                        <p className='serviceDescription'>{mylist.service_description}</p>
                    </div>
                </Col>
            })

            return (
                <Fragment>
                    <Container>
                        <h1 className='serviceTitle text-center'>MY SERVICES</h1>
                        <Row>
                            {myview}
                        </Row>
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

export default Service;