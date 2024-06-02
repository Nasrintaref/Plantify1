import { Component } from "react"
import './LandingPage.css'

class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            LandingPage: null,
            loading: true
        };
    }
    
    componentDidMount() {
            const pagename = 'LandingPage';
            fetch(`http://localhost:3001/Page/${pagename}`,{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'}})
                .then(response => response.json())
                .then(data => this.setState({ LandingPage: data,loading: false  }))
                .catch(error => {
                    console.error('Error fetching page data:', error);
                    this.setState({ loading: false });
                });
        }
    
    
    render(){
        const { LandingPage,loading } = this.state;
        if (loading) {
            return <div>Loading...</div>;
        }
        if (!LandingPage) {
            return <div>404 Page not found </div>;
        }
        const buttons = LandingPage.buttons.map((button, index) => (
            <a key={index} href={button.href}>
                <button>{button.text}</button>
            </a>
        ));
        const images = LandingPage.images.map((image, index) => (
            <img key={index} src={image.src} className={image.class} alt={image.alt} />
        ));
     
        return(

    <div class="LandingPage" >
        {images}
        <h1>{LandingPage.title}</h1>
        {buttons}
    </div>);
    }
}

    export default LandingPage;