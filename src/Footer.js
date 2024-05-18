import { Component } from "react";
import "./Footer.css";

class Footer extends Component{
    render(){
        return(
            <div class="footer-container">
                    <div class="footer">
                    <div class="footer-heading footer-1">
                            <a href="/PlantId">Plant Id</a>
                        </div>
                        <div class="footer-heading footer-1">
                            <a href="/aboutUsPage">About Us</a>
                            </div>
                        <div class="footer-heading footer-2">
                            <h2>Contact Us</h2>
                            <a href="#">Support</a>
                            <a href="#">Contact</a>
                        </div>
                        <div class="footer-heading footer-3">
                            <h3>Social Media</h3>
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">Youtube</a>
                        </div>
                        <div class="footer-heading footer-4">
                            <h4> &copy; 2024 Plantify. All rights reserved.</h4>
                        </div>
                        </div>
                    </div>
               
        );
    }
}
export default Footer