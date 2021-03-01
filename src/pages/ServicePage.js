import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import ServiceTop from "../components/ServiceTop/ServiceTop";
import Service from "../components/service/service";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Service'></TopNavigation>
                <ServiceTop pagetitle='Service'></ServiceTop>
                <Service></Service>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default ServicePage;