import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PortFolioTop from "../components/PortFolioTop/PortFolioTop";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";
import AllRecentProject from "../components/AllRecentProject/AllRecentProject";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Portfolio'></TopNavigation>
                <PortFolioTop pagetitle='Portfolio'></PortFolioTop>
                <AllRecentProject></AllRecentProject>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default PortfolioPage;