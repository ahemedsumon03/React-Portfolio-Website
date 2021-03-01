import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseTop from "../components/CourseTop/CourseTop";
import Courses from "../components/Courses/Courses";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";
import AllCourse from "../components/AllCourse/AllCourse";

class CoursePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Course'></TopNavigation>
                <CourseTop pagetitle='All Courses'></CourseTop>
                <AllCourse></AllCourse>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default CoursePage;