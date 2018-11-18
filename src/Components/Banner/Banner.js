import React, {Component} from 'react';

import './Banner.css';

class Banner extends Component {
    state = {
        emptyLink : "#/",
        anchorList : ["Carpet","Hardwood","Laminate","Tile","Vinyl"],
        bannerNews : "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }
    render () {
        return (
            <div className = "Banner" > 
                <div className="nav-bar">
                    <div className = "container">
                        <div className = "banner-nav">
                            <ul className="nav list-item">
                                {
                                    this.state.anchorList.map((list, index) => {
                                        return (
                                            <li className = "navbar-list-item" key={index}><a href={this.state.emptyLink} className="nav-link">{list}</a></li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="banner-marquee">
                    <p>{this.state.bannerNews}</p>
                </div>
                <div className = "slide-button text-center">
                    <div className = "slide-circle"></div>
                    <div className = "slide-circle"><span className="slide-active"></span></div>
                    <div className = "slide-circle"></div>
                </div>
            </div>
        );
    }
}

export default Banner;