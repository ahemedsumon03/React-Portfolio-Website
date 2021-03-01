import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";

class Aboutpage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='About'></TopNavigation>
                <PageTop pagetitle='About Me'></PageTop>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default Aboutpage;