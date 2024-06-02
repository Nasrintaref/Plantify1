
import { Component } from "react";
import './AboutUs.css';

class AboutUs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            aboutUsPage: null,
            loading: true
        };
    }
    
    componentDidMount() {
        const pagename = 'aboutUsPage';
        fetch(`http://localhost:3001/Page/${pagename}`,{
            method: 'POST', // שינוי לסוג POST
            headers: {
                'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => this.setState({ aboutUsPage: data,loading: false }))
            .catch(error => {
                console.error('Error fetching page data:', error);
                this.setState({ loading: false });
            });
    }

    render(){
        const { aboutUsPage,loading } = this.state;
        if (loading) {
            return <div>Loading...</div>;
        }
        if (!aboutUsPage) {
            return <div>404 Page not found </div>;
        }
        const paragraphs = aboutUsPage.paragrphs.map((paragraph, index) => (    
            <p key={index} className={`p-${index}`}>
                {index === aboutUsPage.paragrphs.length - 1 ? (
                <>{paragraph.split("Click here")[0]}
                <a href="/SignUp" className="custom-link">Click here</a>
                {paragraph.split("Click here")[1]}
                </>
            ) : (
                paragraph
            )}
            </p>
        ));
        

        
            
        return(
            <div className="about-section">
                <div className="content">
                    <h1 id="h1">{aboutUsPage.title}</h1>
                    {paragraphs}
                   
                </div>
            </div>
        );
    }
}


export default AboutUs;

