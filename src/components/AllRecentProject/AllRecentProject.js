import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import myimage from  '../../asset/image/blogpost.jpg'
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class AllRecentProject extends Component {

    constructor() {
        super();
        this.state = {
            demo:[],
            loading:true,
            error:false
        }
    }


    componentDidMount() {
        RestClient.getRequest(AppURL.project).then(result=>{

            if(result == null)
            {
                this.setState({error:true})
            }else {
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
        else if(this.state.loading == false) {

            const mylist = this.state.demo;
            const myview = mylist.map(newlist=>{
                return  <Col sm={12} md={12} lg={4} className='mb-4'>
                    <Card className='projectCard'>
                        <Card.Img variant="top" src={myimage}/>
                        <Card.Body className='text-center'>
                            <Card.Title className='projectCardTitle'>{newlist.project_name}</Card.Title>
                            <Card.Text className='projectCardSubTitle'>
                                {newlist.short_description}
                            </Card.Text>
                            <Link to={'/portfolio/projectdetailsone/'+newlist.id+"/"+newlist.project_name}><Button variant="primary">Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            })

            return (
                <Fragment>
                    <Container>
                        <Row className='mt-5'>
                            {myview}
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

export default AllRecentProject;