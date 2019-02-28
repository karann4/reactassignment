import React, { Component } from 'react';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
    render (){
        return (
            <div>
                <NavBar/>
                <Jumbotron title="Stark" suntitle="the above subtitle"/>
        <div className="container">
            <h2>About</h2>
            <p>
            House Stark of Winterfell is one of the Great Houses of Westeros and the principal noble house of the north. In days of old they ruled as Kings of Winter, but since Aegon's Conquest they have been Wardens of the North and ruled as Lords of Winterfell. Their seat, Winterfell, is an ancient castle renowned for its strength. 
            </p>
            <p>
            Their sigil is a grey direwolf racing across a field of white. Their words are "Winter is Coming", one of only a few house mottoes to be a warning rather than a boast.Several of the POV characters of A Song of Ice and Fire are members of House Stark. 
           </p>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Home;