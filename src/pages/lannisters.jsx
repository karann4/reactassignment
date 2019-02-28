import React, { Component } from 'react';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
    render (){
        return (
            <div>
                <NavBar/>
                <Jumbotron title="Lannister" suntitle="the above subtitle"/>
        <div className="container">
            <h2>About</h2>
            <p>
            House Lannister of Casterly Rock is one of the Great Houses of Seven Kingdoms, and the principal house of the westerlands. Their seat is Casterly Rock, though another branch exists that is based in nearby Lannisport. Their sigil is a golden lion on a field of crimson. Their official motto is "Hear Me Roar!" However, their unofficial motto, equally well known, is "A Lannister always pays his debts."The Warden of the West is a Lannister by tradition.
            </p>
            <p>
            Fair-haired, tall, and handsome, the Lannisters are the blood of Andal adventurers who carved out a mighty kingdom in the western hills and valleys. Through the female line they boast of descent from Lann the Clever, the legendary trickster of the Age of Heroes who tricked the members of House Casterly into giving him Casterly Rock[4] during the era of the First Men.[5] The Lannisters reigned as Kings of the Rock until the Targaryen conquest, when they were defeated at the Field of Fire. Though King Loren I Lannister escaped, he was captured the next day by Targaryen forces. His surrender to Aegon the Conqueror convinced Aegon to allow the Lannisters to remain the liege lords of the westerlands. 
            </p>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Home;