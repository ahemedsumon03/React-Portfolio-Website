import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class ReviewSection extends Component {

    constructor() {
        super();
        this.state = {
            demo:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.ClientReview).then(result=>{

            if(result == null)
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

        if(this.state.loading === true)
        {
            return  <Loading/>
        }
        else if(this.state.loading === false) {
            let settings = {
                autoplay:true,
                autoplaySpeed: 3000,
                dots: true,
                vertical:true,
                swipe:true,
                verticalSwiping: true,
                infinite: true,
                speed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            };

            const mylist = this.state.demo;
            const myview = mylist.map(newlist=>{
                return <div className='text-center'>
                    <Row className='justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img src={newlist.client_image} className='carouselImg'/>
                            <h1 className='serviceName'>{newlist.client_name}</h1>
                            <p className='serviceDescription'>{newlist.client_title}</p>
                        </Col>
                    </Row>
                </div>
            })

            return (
                <Fragment>
                    <Container className='text-center'>
                        <h1 className='serviceTitle text-center'>CLIENT SAYS</h1>
                        <Slider {...settings}>
                            {myview}
                        </Slider>
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

export default ReviewSection;