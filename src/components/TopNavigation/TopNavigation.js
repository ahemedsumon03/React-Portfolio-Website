import React, {Component, Fragment} from 'react';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/responsive.css';
import {Nav, Navbar} from "react-bootstrap";
import Whitelogo from '../../asset/image/navlogo.svg'
import Bluelogo from '../../asset/image/navlogoScroll.svg'
import {NavLink} from "react-router-dom";
class TopNavigation extends Component {


    constructor(props) {
        super();
        this.state={
            navigation:'brand-text',
            navlogo:[Whitelogo],
            navcolor:'navbarBack',
            navItem:'navitem',
            menubuttonColor:'dark',
            pageTitle:props.title
        }
    }

    Scroolview=()=>{
        if(window.scrollY>100){
           this.setState({menubuttonColor:'light',navigation:'scrooltext',navlogo:[Bluelogo],navcolor:'navbarScroll',navItem:'navitemScroll'})
        }
        else if(window.scrollY<=100){
            this.setState({menubuttonColor:'dark',navigation:'brand-text',navlogo:[Whitelogo],navcolor:'navbarBack',navItem:'navitem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.Scroolview)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navcolor} fixed='top' collapseOnSelect expand="lg" variant={this.state.menubuttonColor}>
                    <Navbar.Brand><NavLink className={this.state.navigation} to='/'><img src={this.state.navlogo}/> Sumon Ahemed</NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>

                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to='/'>Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to='/service'>Services</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to='/courses'>Courses</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to='/portfolio'>Portfolio</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to='/contact'>Contact</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to='/about'>About</NavLink></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;