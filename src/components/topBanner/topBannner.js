import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";

class TopBannner extends Component {

    constructor() {
        super();
        this.state={
            "title":"",
            "subtitle":"",
            loading:true
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.hometec).then(result=>{

            this.setState({"title":result[0]['home_title'],"subtitle":result[0]['home_subtitle'],loading:false});


        }).catch(error=>{
            this.setState({'title':'??','subtitle':'??'})
        });
    }

    render() {

        if(this.state.loading === true)
        {
            return <Loading/>
        }
        else {
            return (
                <div>
                    <Fragment>
                        <Container fluid={true} className='topBannerImage p-0'>
                            <div className='topBannerOverlay'>
                                <Container className='topContent'>
                                    <Row>
                                        <Col className='text-center insideDiv'>
                                            <h1 className='topTitle'>{this.state.title}</h1>
                                            <h4 className='topSubTitle'>{this.state.subtitle}</h4>
                                            <Button variant="primary" className='mt-2 more'>More Info</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Container>
                    </Fragment>
                </div>
            );
        }


    }
}

export default TopBannner;