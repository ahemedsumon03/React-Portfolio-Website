import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import ContactTop from "../components/ContactTop/ContactTop";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title='Contact'></TopNavigation>
                <ContactTop pagetitle='Contact'></ContactTop>
                <ContactForm></ContactForm>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default ContactPage;