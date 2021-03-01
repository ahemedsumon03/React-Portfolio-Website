import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import ContactTop from "../components/ContactTop/ContactTop";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Refund'></TopNavigation>
                <ContactTop pagetitle='Refund Policy'></ContactTop>
                <RefundPolicy></RefundPolicy>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default RefundPage;