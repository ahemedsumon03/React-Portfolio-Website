import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import TearmCondition from "../components/TearmCondition/TearmCondition";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";
import Footer from "../components/Footer/Footer";
import CourseTop from "../components/CourseTop/CourseTop";

class TearmConditionPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Terms & Condition'></TopNavigation>
                <CourseTop pagetitle='Terms & Condition'></CourseTop>
                <TearmCondition></TearmCondition>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default TearmConditionPage;