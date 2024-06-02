import { Component } from "react";
import "./Footer.css";


class Footer extends Component{
    render(){
        return(
            <div class="footer-container">
                <div class="footer1">
                <a href="/PlantId">PlantFinder</a>
                <a href="/aboutUsPage">About Us</a>
                <a href="/contactUsPage">Contact Us</a>
                </div>
                <div class="footer2">
                    <h4> &copy; 2024 Plantify. All rights reserved.</h4>
                </div>
                    
            </div>
               
        );
    }
}
export default Footer