import React, {Component} from 'react';

import './Nav.css';

class Nav extends Component {
    state = {
        navbarToggle : false,
        emptyLink : "#/",
        anchorList : ["Home","Special","Your account","Contact","Sitemap"],
        //activeListIndex : 0
    }
    activeIndexHandler = (index) => {
        // console.log(index);
        // this.setState({
        //     activeListIndex : index
        // });        
    };
    navbarToggleHandler = () => {
        //console.log("Yes");
        this.setState({
            navbarToggle : !this.state.navbarToggle
        })
    }

    overlayEffectHandler = () => {
        this.setState({
            navbarToggle : !this.state.navbarToggle
        });
    }

    componentDidMount = () => {
        window.addEventListener('scroll',this.overlayScrollEffectHandler);
    }

    overlayScrollEffectHandler = () => {        
        if(this.state.navbarToggle){
            this.setState({
                navbarToggle : !this.state.navbarToggle
            })
        }
    }

    render () {
        const bar1change = this.state.navbarToggle?"bar1 changebar1":"bar1";
        const bar2change = this.state.navbarToggle?"bar2 changebar2":"bar2";
        const bar3change = this.state.navbarToggle?"bar3 changebar3":"bar3";

        const navbarToggle = this.state.navbarToggle?"side-nav":"mr-auto nav-navbar";
        const navbarOverlayEffect = this.state.navbarToggle?"overlay show":"overlay";


        return (
            <div className="Nav">
                <div className="navbar">
                <div className={navbarOverlayEffect} onClick={this.overlayEffectHandler}></div>
                    <div className="container">
                        <div className="menu-bar" onClick = {this.navbarToggleHandler}>
                            <span className={bar1change}></span>
                            <span className={bar2change}></span>
                            <span className={bar3change}></span>
                        </div>
                        <div className={navbarToggle}>
                            <ul className="list-item">
                                {
                                    this.state.anchorList.map((element, index) => {
                                        return (
                                            <li className="navbar-list" key={index}>
                                                <a href={this.state.emptyLink}
                                                onClick = {this.activeIndexHandler.bind(this, index)}
                                                className = {this.state.activeListIndex===index?
                                                    "nav-link":"nav-link"}>
                                                    {element}
                                                </a>
                                            </li>        
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="ml-auto">
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;