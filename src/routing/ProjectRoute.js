import React, {Component, Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from "../pages/Homepage";
import ServicePage from "../pages/ServicePage";
import CoursePage from "../pages/CoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import Aboutpage from "../pages/Aboutpage";
import RefundPage from "../pages/RefundPage";
import TearmConditionPage from "../pages/TearmConditionPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsOnePage from "../pages/ProjectDetailsOnePage";
import ProjectDetailsTwoPage from "../pages/ProjectDetailsTwoPage";
import ProjectDetailsThreePage from "../pages/ProjectDetailsThreePage";
import CouserDetailsPageOne from "../pages/CouserDetailsPageOne";
class ProjectRoute extends Component {
    render() {
        return (
            <Fragment>

                <Switch>

                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/service' component={ServicePage}/>
                    <Route exact path='/courses' component={CoursePage}/>
                    <Route exact path='/portfolio' component={PortfolioPage}/>
                    <Route exact path='/contact' component={ContactPage}/>
                    <Route exact path='/about' component={Aboutpage}/>
                    <Route exact path='/refund' component={RefundPage}/>
                    <Route exact path='/terms' component={TearmConditionPage}/>
                    <Route exact path='/privacy' component={PrivacyPage}/>
                    <Route exact path='/portfolio/projectdetailsone/:valueid/:tittlepage' component={ProjectDetailsOnePage}/>
                    <Route exact path='/portfolio/projectdetailstwo' component={ProjectDetailsTwoPage}/>
                    <Route exact path='/portfolio/projectdetailsthree' component={ProjectDetailsThreePage}/>
                    <Route exact path='/courses/detailsone/:value' component={CouserDetailsPageOne}/>
                    <Route exact path='/courses/detailstwo' component={CouserDetailsPageOne}/>
                    <Route exact path='/courses/detailsthree' component={CouserDetailsPageOne}/>
                    <Route exact path='/courses/detailsfour' component={CouserDetailsPageOne}/>
                    <Route exact path='/courses/detailsfive' component={CouserDetailsPageOne}/>
                    <Route exact path='/courses/detailssix' component={CouserDetailsPageOne}/>
                </Switch>


            </Fragment>
        );
    }
}

export default ProjectRoute;