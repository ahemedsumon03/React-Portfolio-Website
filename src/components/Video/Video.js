import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faCheckCircle, faPlayCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'video-react/dist/video-react.css'
import {Player, BigPlayButton} from 'video-react'
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";
class Video extends Component {

    constructor() {
        super();
        this.state = {
            show:false,
            des:"",
            url:"",
            loading:true
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.videoHome).then(result=>{
            this.setState({des:result[0]['video_desription'],url:result[0]['video_url'],loading:false});
        }).catch(error=>{
            this.setState({des:"???",url:"???"});

        })
    }

    handleOpen=()=>{
        this.setState({show:true})
    }
    handleClose=()=>{
        this.setState({show:false})
    }

    render() {

        if(this.state.loading === true)
        {
            return <Loading/>
        }
        else {
            return (
                <Fragment>
                    <Container className='text-center'>
                        <Row>
                            <Col lg={12} md={12} sm={12} className='VideoCard'>
                                <div>
                                    <p className='VideoTitle'>How I Do</p>
                                    <p className='VideoSubTitle'>{this.state.des}</p>
                                    <p><FontAwesomeIcon onClick={this.handleOpen} icon={faPlayCircle} className='VideoLogo'/></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Modal size="lg" show={this.state.show} onhHide={this.handleClose}>
                        <Modal.Body>
                            <Player>
                                <source src={this.state.url} />
                                <BigPlayButton position='center'/>
                            </Player>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            );
        }


    }
}

export default Video;