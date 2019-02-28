import React, { Component } from 'react';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
    render (){
        return (
            <div>
                <NavBar/>
                <Jumbotron title="Targaryen" suntitle="the above subtitle"/>
        <div className="container">
            <h2>About</h2>
            <p>
            House Targaryen is a noble family of Valyrian descent who once ruled the Seven Kingdoms of Westeros. The Targaryen sigil is a three-headed dragon breathing flames, red on black. The house words are "Fire and Blood".
The only family of dragonlords who survived the Doom of Valyria, the Targaryens left the Valyrian Freehold twelve years before the Doom. They resided for more than a century at Dragonstone on the island of the same name, until Aegon the Conqueror and his sister-wives, Visenya and Rhaenys, began the first of the Wars of Conquest in -2 AC.
            </p>
       
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Home;