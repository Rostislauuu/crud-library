import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../App.scss';

class Menu extends Component{
    render(){
        return(
            <div className="menu-container">
                <div className="menu-root-link-main">
                    <Link to="/main" className="menu-link">Main Page </Link>
                </div>
                
                <div className="menu-root-link-about">
                    <Link to="about" className="menu-link"> About</Link>
                </div>
            </div>
        )
    }
}

export default Menu;