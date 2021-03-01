import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import ContactTop from "../components/ContactTop/ContactTop";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import CourseTop from "../components/CourseTop/CourseTop";

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Privacy'></TopNavigation>
                <CourseTop pagetitle='Privacy Policy'></CourseTop>
                <PrivacyPolicy></PrivacyPolicy>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default PrivacyPage;