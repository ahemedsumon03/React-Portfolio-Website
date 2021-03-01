import React, {Component, Fragment} from 'react';
import {Button, Col, Container, ResponsiveEmbed, Row} from "react-bootstrap";
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react';
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class CouserDetailsOne extends Component {

    constructor(props) {
        super();
        this.state = {
            id:props.id,
            skill_all:"",
            video_url:"",
            course_link:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.givedata+"/"+this.state.id).then(result=>{

            if(result === null)
            {
                this.setState({error:true})
            }
            else {
                this.setState({
                    skill_all:result[0]['skill_all'],
                    video_url:result[0]['video_url'],
                    course_link:result[0]['course_link'],
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
                    <div className='mt-5'>
                        <Container>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h4>Skill You Get</h4>
                                    { ReactHtmlParser(this.state.skill_all) }
                                    <a target="_blank" href={"//"+this.state.course_link}><Button className='couserlink' variant="primary">More Info</Button></a>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <Player>
                                        <source src={this.state.video_url} />
                                        <BigPlayButton position='center'/>
                                    </Player>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </Fragment>
            );
        }
        else if(this.state.loading === true)
        {
            return  <Wentwrong/>
        }

    }
}

export default CouserDetailsOne;