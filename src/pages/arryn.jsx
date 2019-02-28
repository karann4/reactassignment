import React, { Component } from 'react';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
    render (){
        return (
            <div>
                <NavBar/>
                <Jumbotron title="Arryn" suntitle="the above subtitle"/>
        <div className="container">
            <h2>About</h2>
            <p>
            House Arryn of the Eyrie is one of the Great Houses of Westeros, and is the principal noble house in the Vale of Arryn. Their main seat is the Eyrie, which is considered impregnable.House Arryn has at least one other holding, their winter castle at the Gates of the Moon, which was once their main seat. Both of these fortifications sit astride the Giant's Lance, the tallest mountain in the Vale, the Gates of the Moon at its foot, the Eyrie at its top. The Arryn sigil is a sky-blue falcon soaring upwards, outlined against a white moon on a sky-blue field, and their words are "As High as Honor".
             </p>
            <p>
            The Arryns of the Eyrie have a collection of distant relatives located throughout the Vale. Although much poorer than the ruling Arryns, aside from the Arryns of Gulltown, the lesser branches are described by Petyr Baelish as proud due to their name and heritage.
             </p>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Home;