import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import RestClient from "../../ServerAPI/RestClient";
import AppURL from "../../ServerAPI/AppURL";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/loading";
import Wentwrong from "../Wentwrong/Wentwrong";

class Technology extends Component {
    constructor() {
        super();
        this.state = {
             data: [],
             text_des:"...",
             loading:true,
             error:false
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppURL.chartData).then(result=>{

            if(result == null)
            {
                this.setState({error:true})
            }
            else {
                this.setState({data:result,loading:false})
            }
        }).catch(error=>{
            this.setState({error:true})
        })

        RestClient.getRequest(AppURL.hometec).then(result=>{
            this.setState({text_des:result[0]['tech_description']})
        }).catch(error=>{
            this.setState({text_des:"???"})
        })
    }

    render() {

        if(this.state.loading === true)
        {
            return <Loading/>
        }
        else if(this.state.loading === false){
            const blue ="rgba(0,115,230,0.8)"
            return (
                <Fragment>
                    <Container className='text-center'>
                        <h1 className='serviceTitle'>Technology Used</h1>
                        <Row>
                            <Col style={{width:'100%',height:'300px'}} lg={6} md={12} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <XAxis dataKey="technology"></XAxis>
                                        <Tooltip/>
                                        <Bar dataKey="projects" fill={blue}>

                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <p className='text-justify para-description'>{ ReactHtmlParser(this.state.text_des) }</p>
                            </Col>
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

export default Technology;