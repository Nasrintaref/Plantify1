import './App.css';
import { Component } from 'react';
import ReactDOM from "react-dom/client";
import Footer from './Footer';
import Header from './Header';
import AboutUs from './AboutUs';
import Login from './Login';
import SignUp from './SignUp';
import LandingPage from './LandingPage';
import PlantIdPage from './PlantId';
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends Component {
  render(){
  return (<div> 
  <Header />
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route index element={<LandingPage />} />
          <Route path="/aboutUsPage" element={<AboutUs />} />
          <Route path="/loginPage" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/PlantId" element={<PlantIdPage />} />
          <Route path="*" element={<noPage />} />
      </Routes>
    </BrowserRouter>
  <Footer />

  </div>
  );

  }
}
export default App;
