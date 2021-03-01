import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CouserDetailsOne from "../components/CouserDetailsOne/CouserDetailsOne";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";

class CouserDetailsPageOne extends Component {

    constructor({match}) {
        super();
        this.state = {
            id:match.params.value
        }

    }


    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Course Details'></TopNavigation>
                <CourseDetails id={this.state.id}></CourseDetails>
                <CouserDetailsOne id={this.state.id}></CouserDetailsOne>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default CouserDetailsPageOne;