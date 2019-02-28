import React, { Component } from 'react';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
    render (){
        return (
            <div>
                <NavBar/>
                <Jumbotron title="Baratheon" suntitle="the above subtitle"/>
        <div className="container">
            <h2>About</h2>
            <p>
            House Baratheon of Storm's End is one of the Great Houses of Westeros, and is the principal house in the stormlands, which they rule as Lords Paramount of the Stormlands. Their seat, Storm's End, is an ancient castle raised by the Storm Kings from the now-extinct House Durrandon. The Baratheon sigil is a crowned black stag on a field of gold.[1] Members of the family tend to be tall and powerfully built, with black hair and blue eyes, as well as strong, square jawlines. They are known for their mercurial tempers, and their words are "Ours is the Fury". 
            </p>
            <p>
            After Robert's Rebellion, House Baratheon split into three branches: Lord Robert Baratheon was crowned king and took residence at King's Landing, thereby creating House Baratheon of King's Landing. Robert gave the seat of Dragonstone to his younger brother, Stannis, creating House Baratheon of Dragonstone. Robert's youngest brother, Renly, became the Lord of Storm's End, continuing House Baratheon of Storm's End. 
             </p>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Home;