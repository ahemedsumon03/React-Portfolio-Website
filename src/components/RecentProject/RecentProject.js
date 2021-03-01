import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";

class RecentProject extends Component {

    constructor() {
        super();
        this.state = {
            demo:[],
            loading:true
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.project3).then(result=>{
            this.setState({demo:result,loading:false})
        }).catch(error=>{
            this.setState({demo:"???"})
        })
    }

    render() {

        if(this.state.loading ===true)
        {
            return <Loading/>
        }
        else {

            const mylist = this.state.demo;
            const myview = mylist.map(mylist=>{
                return <Col sm={12} md={12} lg={4}>
                    <Card className='projectCard'>
                        <Card.Img variant="top" src={mylist.image_one}/>
                        <Card.Body className='text-center'>
                            <Card.Title className='projectCardTitle'>{mylist.project_name}</Card.Title>
                            <Card.Text className='projectCardSubTitle'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Link to={'/portfolio/projectdetailsone/'+mylist.id+"/"+mylist.project_name}><Button variant="primary">Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            })
            return (
                <Fragment>
                    <Container>
                        <h1 className='serviceTitle text-center'>Recent Projects</h1>
                        <div style={{marginBottom:'80px'}}>
                            <Row>
                                {myview}
                            </Row>
                        </div>
                    </Container>
                </Fragment>
            );
        }

    }
}

export default RecentProject;