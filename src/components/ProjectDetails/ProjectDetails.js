import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import myimage from '../../asset/image/blogpost.jpg'
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import ReactHtmlParser from "react-html-parser";

class ProjectDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            projectName: props.name,
            id:props.id,
            image_two:"",
            project_name:"",
            short_description:"",
            project_features:"",
            more_info:""
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.showproject+"/"+this.state.id).then(result=>{
            this.setState({
                image_two:result[0]['image_two'],
                project_name:result[0]['project_name'],
                short_description:result[0]['short_description'],
                project_features:result[0]['project_features'],
                more_info:result[0]['more_info'],
            })
        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                <div className='mt-5 pt-3'>
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <img className='projectdetails' src={this.state.image_two}/>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <h4>{this.state.project_name}</h4>
                                <p>{this.state.short_description}</p>
                                { ReactHtmlParser(this.state.project_features) }
                                <a target="_blank" href={"//"+this.state.more_info}><Button variant="primary">More Info</Button></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default ProjectDetails;