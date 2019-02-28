import React, { Component } from 'react';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './home.jsx';

class Home extends Component {
    render (){
        return (
            <div>
                <NavBar/>
                <Jumbotron title="Game of Thrones" subtitle=""/>
        <div className="container">
            
            <p>
                
             </p>
            <p>
            Game of Thrones is roughly based on the storylines of A Song of Ice and Fire, set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series chronicles the violent dynastic struggles among the realm's noble families for the Iron Throne, while other families fight for independence from it. It opens with additional threats in the icy North and Essos in the east.
Showrunner David Benioff jokingly suggested "The Sopranos in Middle-earth" as Game of Thrones' tagline, referring to its intrigue-filled plot and dark tone in a fantasy setting of magic and dragons. In a 2012 study of deaths per episode, it ranked second out of 40 recent U.S. TV drama series (with an average of 14)
            </p>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Home;