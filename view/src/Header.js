import React, { Component } from 'react';
import "./Header.css";


class Header extends Component{
    render(){
        return(
        <div>
            <nav>
                <ul className="menu">
                <li className="Language"><a href="#">Language</a></li>
                <li className="item"><a href="#">Home</a></li>
                <li className="item"><a href="#">About</a></li>
                <li className="item"><a href="#">Services</a></li>
                <li className="item button"><a href="#">Login</a></li>
                <li className="item button secondary"><a href="#">Sign Up</a></li>
                <li className="toggle"><span className="bars"></span></li>
                </ul>
            </nav>
            </div>
        );
    }

}
export default Header;