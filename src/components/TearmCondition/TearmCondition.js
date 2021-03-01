import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class TearmCondition extends Component {

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
                this.setState({desc:result[0]['term'],loading:false})
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
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                { ReactHtmlParser(this.state.desc) }
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        else if(this.state.loading === true)
        {
            return <Wentwrong/>
        }

    }
}

export default TearmCondition;