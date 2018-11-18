import React, {Component} from 'react';

import './Header.css';
import logo from './images/logo.png';

class Header extends Component {
    render () {
        return (
            <div className="Header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="mr-auto header-image">
                                <img src={logo} alt="FlooringStore" />
                            </div>
                            <div className="ml-auto contact">
                                <h5>CallNow:</h5>
                                <p>+1-234-4568-96</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;