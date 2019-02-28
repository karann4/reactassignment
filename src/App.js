import React, { Component } from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home.jsx';
import NavBar from './components/Navbar.jsx';
import Stark from './pages/stark';
import Lannister from './pages/lannisters';
import Baratheon from './pages/baratheon';
import Targaryen from './pages/targaryen';
import Arryn from './pages/arryn';
import Greyjoy from './pages/greyjoy';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" component = {Home}/>
          <Route path="/stark" component = {Stark}/>
          <Route path="/lannisters" component = {Lannister}/>
          <Route path="/baratheon" component = {Baratheon}/>
          <Route path="/targaryen" component = {Targaryen}/>
          <Route path="/arryn" component = {Arryn}/>
          <Route path="/greyjoy" component = {Greyjoy}/>
        </div>
      </Router>
    

    );
  }
}

export default App;
