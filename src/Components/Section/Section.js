import React , {Component} from 'react';

import './Section.css';
import HardWood from './images/collection-1.jpg';
import Carpet from './images/collection-2.jpg';
import Tile from './images/collection-3.jpg';


class Section extends Component {
    render () {
        return (
            <div className = "Section">
                <div className="section-layer">
                    <div className = "container-fluid">
                        <div className="section-content text-center">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="collection-content ">
                                        <div className = "collection-image">
                                            <img src={HardWood} alt="HardWood" />
                                        </div>
                                            <h3>HardWood</h3>
                                            <p>Labore et dolore magna aliqu</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <button className="btn btn-custom">View all collections</button>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="collection-content">
                                        <div className = "collection-image">
                                            <img src={Carpet} alt="Carpet" />
                                        </div>
                                            <h3>Carpet</h3>
                                            <p>Labore et dolore magna aliqu</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            <button className="btn btn-custom">View all collections</button>
                                        </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="collection-content">
                                        <div className = "collection-image">
                                            <img src={Tile} alt="Tile" />
                                        </div>
                                            <h3>Tile</h3>
                                            <p>Labore et dolore magna aliqu</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <button className="btn btn-custom">View all collections</button>
                                    </div>
                                </div>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;