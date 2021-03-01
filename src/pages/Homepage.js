import React, {Component} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBannner from "../components/topBanner/topBannner";
import Service from "../components/service/service";
import Technology from "../components/Technology/Technology";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import Footer from "../components/Footer/Footer";
import Footer_bottom from "../components/Footer_bottom/Footer_bottom";

class Homepage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <div>
                <TopNavigation title='Home'></TopNavigation>
                <TopBannner></TopBannner>
                <Service></Service>
                <Technology></Technology>
                <Summary></Summary>
                <RecentProject></RecentProject>
                <Courses></Courses>
                <Video></Video>
                <ReviewSection></ReviewSection>
                <Footer></Footer>
                <Footer_bottom></Footer_bottom>
            </div>
        );
    }
}

export default Homepage;