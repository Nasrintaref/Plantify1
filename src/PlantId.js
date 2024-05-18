import { Component } from "react"
import './PlantId.css'
import Page from './NewJson';

class PlantIdPage extends Component{
    render(){
        let PlantIdPage=Page.find(page=>(page.pagename==="PlantIdPage"));
        let Button=[];
        for(let j=0;j<PlantIdPage.buttons.length;j++){
        let button=PlantIdPage.buttons[j];
        Button.push(           
            <button href={button.href} className="Button-class" >{button.text}</button>);
        }
              

        return(

    <div class="PlantIdPage" >
        <h1> {PlantIdPage.title}</h1>
        <h2>{PlantIdPage.subtitle}</h2>
        <img src={PlantIdPage.image1.src} alt={PlantIdPage.image1.alt} className={PlantIdPage.image1.class} />
        <img src={PlantIdPage.image2.src} alt={PlantIdPage.image2.alt} className={PlantIdPage.image2.class} />
        <img src={PlantIdPage.image3.src} alt={PlantIdPage.image3.alt} className={PlantIdPage.image3.class} />
        <img src={PlantIdPage.image4.src} alt={PlantIdPage.image4.alt} className={PlantIdPage.image4.class} />

        {Button}
    </div>);
    }
}

    export default PlantIdPage;