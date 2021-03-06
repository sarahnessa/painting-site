import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {


    render() {
      
      return (
        <div>
          <nav className="app-header">

              <h1 className="app-title"><a href="/">Sarah Nessa</a></h1>

              <nav className="app-menu">
                <ul>
                  <li><NavLink exact to='/'>Paintings</NavLink></li>
                  <li><NavLink to='/about.js'>About</NavLink></li>
                  <li><NavLink to='/contact.js'>Contact</NavLink></li>
                </ul>
              </nav>
              
              <nav className="painting-menu">
                <ul>
                  <li><NavLink className="seriesLink" exact to='/'>Nature x Spirit</NavLink></li>
                  <li><NavLink className="seriesLink" to='/science.js'>Under the Microscope</NavLink></li>
                  <li><NavLink className="seriesLink" to='/travel.js'>Travel Gems</NavLink></li>
                </ul>
              </nav>

          </nav>
          <div className="clearfix"></div>
        </div>
         
      );
    }
  };


  export default Navigation;