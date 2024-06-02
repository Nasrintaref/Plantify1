import React, { Component } from "react";
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Loginpage: null
        };
    }

    componentDidMount() {
        const pagename = 'LogInPage';
        fetch(`http://localhost:3001/Page/${pagename}`,{
            method: 'POST', // שינוי לסוג POST
            headers: {
                'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => this.setState({ Loginpage: data }))
            .catch(error => console.error('Error fetching page data:', error));
    }

    render() {
        const { Loginpage } = this.state;

        if (!Loginpage) {
            return <div>404 Page not found </div>;
        }


        let rec = Loginpage.recover;
        let Inputs = Loginpage.inputs.map(input => (
            <input
                type={input.type}
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                key={input.id} // You need to specify a unique key for each child in a list
            />
        ));

        const buttons = Loginpage.buttons.map((button, index) => (
            <a href={button.href} key={index}>
                <button>{button.text}</button>
            </a>
        ));
        

        return (
            <div className="Loginpage">
                <h1>{Loginpage.title1}</h1>
                <h2>{Loginpage.title2}</h2>
                <h3>{Loginpage.subtitle1}</h3>
                {Inputs}
                <div className="Recover">
                    <a href={rec.href}>{rec.text}</a>
                </div>
                {buttons[0]}
                <h5>{Loginpage.subtitle2}</h5>
                {buttons[1]}
                <img src={Loginpage.images.src} className={Loginpage.images.class} alt={Loginpage.images.alt} />
            </div>
        );
    }
}

export default Login;
