import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render (){
        return (
            <nav className="navbar navbar-expand-lg ">
            <Link  className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
         
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/stark">STARK<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/lannisters">LANNISTERS</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/baratheon">BARATHEON<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/greyjoy">GREYJOY</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/arryn">ARRYN <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/targaryen">TARGARYEN <span className="sr-only">(current)</span></Link>
                </li>
               
            
               
              </ul>
         </div>
        
          </nav>
        );
    }
}



export default Navbar;
