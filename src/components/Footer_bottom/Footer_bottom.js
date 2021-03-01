import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class FooterBottom extends Component {

    constructor() {
        super();
        this.state = {
            footer_credit:"",
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
                this.setState({footer_credit:result[0]['footer_credit'],loading:false})
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
        else if(this.state.loading === false){
            return (
                <Fragment>
                    <div className='footer_bottom'>
                        <Container className='text-center'>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <p className='text-white'>{this.state.footer_credit}</p>
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

export default FooterBottom;