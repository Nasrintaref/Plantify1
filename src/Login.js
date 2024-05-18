import { Component } from "react"
import './Login.css'
import Page from './NewJson';

class Login extends Component{
    render(){
        let LogInPage=Page.find(page=>(page.pagename==="LogInPage"));
        let rec=LogInPage.recover;
        let Inputs=[];
        for(let i=0;i<LogInPage.inputs.length;i++){
        let input= LogInPage.inputs[i];
        Inputs.push(
        <input
        type={input.type}
        id={input.id}
        name={input.name}
        placeholder={input.placeholder}/>)
        }

        let Buttoun=[];
        for(let j=0;j<LogInPage.buttons.length;j++){
        let buttoun=LogInPage.buttons[j];
        Buttoun.push(
            <a href={buttoun.href}>
            <button >{buttoun.text}</button></a>);
        }        

        
        return(
        <div class="LoginPage" >
        <h1 >{LogInPage.title1}</h1>
        <h2>{LogInPage.title2}</h2>
        <h3>{LogInPage.subtitle1}</h3>
        {Inputs}

        <div class="Recover">
        <a href={rec.href}>{rec.text}</a>
        </div>
        {Buttoun[0]}
        <h5>{LogInPage.subtitle2}</h5>
        {Buttoun[1]}
        <img src={LogInPage.image1.src} alt={LogInPage.image1.alt} className={LogInPage.image1.class} />
             </div>

        );

    }
}
export default Login;