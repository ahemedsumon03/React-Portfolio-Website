import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CourseImage from "../../asset/image/writing-1149962__480.webp"
import {Link} from "react-router-dom";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";
class Courses extends Component {

    constructor() {
        super();
        this.state = {
            demo:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.alldata).then(result=>{

            if(result === null)
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

        if(this.state.loading===true)
        {
            return <Loading></Loading>
        }
        else if(this.state.loading == false) {
            const mylist = this.state.demo;
            const myview = mylist.map(newlist=>{
                return <Col lg={6} md={12} sm={12} className='mb-5'>
                    <Row>
                        <Col md={6} sm={12} lg={6}>
                            <img className='CourseImage' src={CourseImage}/>
                        </Col>
                        <Col md={6} sm={12} lg={6}>
                            <h5 className='CoursesTitle'>{newlist.short_title}</h5>
                            <p className='CourseDes'>{newlist.short_des}</p>
                            <Link className='CourseLink' to={'/courses/detailsone/'+newlist.id}>Details</Link>
                        </Col>
                    </Row>
                </Col>
            })


            return (
                <Fragment>
                    <Container>
                        <h1 className='serviceTitle text-center'>OUR COURSES</h1>
                        <Row>
                            {myview}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
        else if(this.state.error = true)
        {
            return <Wentwrong/>
        }
    }
}

export default Courses;