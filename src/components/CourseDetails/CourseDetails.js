import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class CourseDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            id:props.id,
            long_title:"",
            long_des:"",
            total_lecture:"",
            total_student:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.givedata+"/"+this.state.id).then(result=>{

            if(result == null)
            {
                this.setState({error:true})
            }
            else {
                this.setState({
                    long_title:result[0]['long_title'],
                    long_des:result[0]['long_des'],
                    total_lecture:result[0]['total_lecture'],
                    total_student:result[0]['total_student'],
                    loading:false
                })
            }

        }).catch(error=>{
            this.setState({
                error:true
            })
        })
    }

    render() {

        if(this.state.loading === true)
        {
            return  <Loading/>
        }
        else if(this.state.loading === false) {
            return (
                <Fragment>
                    <Container fluid={true} className='topAboutImage p-0'>
                        <div className='topAboutOverlay'>
                            <Container className='topAboutContent'>
                                <Row className='ml-5'>
                                    <Col lg={6} md={6} sm={12}>
                                        <h3 className='text-light longtext'>{this.state.long_title}</h3>
                                        <p className='text-light newtext'>{this.state.total_lecture}</p>
                                        <p className='text-light newtext'>{this.state.total_student}</p>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <p className='text-light text-justify longdes'>{this.state.long_des}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </Fragment>
            );
        }
        if(this.state.error === true) {

            return <Wentwrong/>
        }


    }
}

export default CourseDetails;