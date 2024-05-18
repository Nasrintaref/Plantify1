
import { Component } from "react";
import './AboutUs.css';
import Page from './NewJson';

class AboutUs extends Component{
    render(){
        let AboutUsPage=Page.find(page=>(page.pagename==="aboutUsPage"));
        
            
        return(
            <div class="about-section">
                <h1 id="h1">{AboutUsPage.title}</h1>
                <h2 id="h2">{AboutUsPage.subtitle}</h2>
                <p id="p1">{AboutUsPage.paragrphs1}</p>
                <p id="p2">{AboutUsPage.paragrphs2}</p>
                <div class="Img-container">
                <img src={AboutUsPage.image1.src} alt={AboutUsPage.image1.alt} className={AboutUsPage.image1.class} />
                <img src={AboutUsPage.image2.src} alt={AboutUsPage.image2.alt} className={AboutUsPage.image2.class} />

                </div>
            </div>
        );
    }
}


export default AboutUs;

