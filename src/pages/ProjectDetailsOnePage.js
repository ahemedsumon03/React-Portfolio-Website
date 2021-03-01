import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseTop from "../components/CourseTop/CourseTop";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer_bottom/Footer_bottom";

class ProjectDetailsOnePage extends Component {

    constructor({match}) {
        super();
        this.state = {
            ProjectId:match.params.valueid,
            ProjectTitle:match.params.tittlepage
        }
    }

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Project Details'></TopNavigation>
                <CourseTop pagetitle='Foll Bazzar 1' title={this.state.ProjectTitle}></CourseTop>
                <ProjectDetails name='Foll Bazzar 1' id={this.state.ProjectId}></ProjectDetails>
                <Footer></Footer>
                <FooterBottom></FooterBottom>
            </Fragment>
        );
    }
}

export default ProjectDetailsOnePage;