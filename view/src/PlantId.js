import { Component } from "react"
import './PlantId.css'


class PlantIdPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            PlantFinder: null,
            loading: true
        };
    }

    componentDidMount() {
        const pagename = 'PlantIdPage';
        fetch(`http://localhost:3001/Page/${pagename}`,{
            method: 'POST', // שינוי לסוג POST
            headers: {
                'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => this.setState({ PlantIdPage: data, loading: false }))
            .catch(error => {
                console.error('Error fetching page data:', error);
                this.setState({ loading: false });
            });
    }

    render(){
        const { PlantIdPage,loading  } = this.state;
        if (loading) {
            return <div>Loading...</div>;
        }

        if (!PlantIdPage) {
            return <div>404 Page not found </div>;
        }

        
        let Button=[];
        for(let j=0;j<PlantIdPage.buttons.length;j++){
        let button=PlantIdPage.buttons[j];
        Button.push(           
            <button href={button.href} className="Button-class" >{button.text}</button>);
        }
        let Images = PlantIdPage.images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className={image.class} />
        ));

              

        return(

    <div className="PlantIdPage" >
        <h1> {PlantIdPage.title}</h1>
        <h2>{PlantIdPage.subtitle}</h2>
        {Images}
        {Button}
    </div>);
    }
}

    export default PlantIdPage;