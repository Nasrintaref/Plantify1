import { Component } from "react"
import './LandingPage.css'
import Page from './NewJson';

class LandingPage extends Component{
    render(){
        let LandingPage=Page.find(page=>(page.pagename==="LandingPage"));
        let Button=[];
        for(let j=0;j<LandingPage.buttons.length;j++){
        let button=LandingPage.buttons[j];
        Button.push(
            <a href={button.href}>
            <button >{button.text}</button></a>);
        }
       
            
        return(

    <div class="LandingPage" >
        <img src={LandingPage.image1.src} className={LandingPage.image1.class} alt={LandingPage.image1.alt} />
        <img src={LandingPage.image2.src} className={LandingPage.image2.class} alt={LandingPage.image2.alt} />
        <h1>{LandingPage.title}</h1>
        {Button}
    </div>);
    }
}

    export default LandingPage;