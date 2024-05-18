import { Component } from 'react'
import './SignUp.css'
import Page from './NewJson';

class SignUp extends Component{
    render(){
        let SignUpPage=Page.find(page=>(page.pagename==="SignUpPage"));
        
        let Inputs=[];
        for(let i=0;i<SignUpPage.inputs.length;i++){
        let input= SignUpPage.inputs[i];
        Inputs.push(
            <input
            type={input.type}
            id={input.id}
            name={input.name}
            placeholder={input.placeholder}/>)
        }

        let Button=[];
        for(let j=0;j<SignUpPage.buttons.length;j++){
        let button=SignUpPage.buttons[j];
        Button.push(
            <button
             key={j}
             href={button.href}>{button.text}</button>)
        
        }        

        return(
        <div className="SignUpPage">
             <h1>{SignUpPage.title}</h1>
             <h2>{SignUpPage.subtitle1}</h2>
             {Inputs}
             <h3>{SignUpPage.subtitle2}</h3>
            {Button}
             <img src={SignUpPage.image1.src} alt={SignUpPage.image1.alt} className={SignUpPage.image1.class} />
             </div>

        )}}

export default SignUp;

