import { Component } from 'react'
import './SignUp.css'


class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            SignUpPage: null,
            loading: true
        };
    }

    componentDidMount() {
        const pagename = 'SignUpPage';
        fetch(`http://localhost:3001/Page/${pagename}`,{
            method: 'POST', // שינוי לסוג POST
            headers: {
                'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => this.setState({ SignUpPage: data,loading: false }))
            .catch(error => {console.error('Error fetching page data:', error);
            this.setState({ loading: false });
    });

    }

    render(){
    
       const { SignUpPage,loading } = this.state;
       if (loading) {
        return <div>Loading...</div>;}

        if (!SignUpPage) {
        return <div>404 Page not found </div>;
    }
        
        
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

