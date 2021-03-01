import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class PageTop extends Component {

    constructor() {
        super();
        this.state = {
            desc:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.selectinfor).then(result=>{

            if(result == null)
            {
                this.setState({error:true})
            }
            else {
                this.setState({desc:result[0]['about'],loading:false})
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
        else if(this.state.loading === false) {
            return (
                <Fragment>
                    <Container fluid={true} className='topAboutImage p-0'>
                        <div className='topAboutOverlay'>
                            <Container className='topAboutContent'>
                                <Row>
                                    <Col className='text-center'>
                                        <h1 className='topAboutTitle'>{this.props.pagetitle}</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                    <Container className='mt-5'>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                { ReactHtmlParser(this.state.desc) }
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        else if(this.state.error === true)
        {
            return <Wentwrong/>
        }

    }
}

export default PageTop;