import React, { Component } from 'react'
import SarahNessa from './img/4.jpg'

class About extends Component {

  

  render() {
    return (
       <div id="about-container">
       
       <div id="imgContainer"><img alt="Sarah Nessa Oil Painter" className="aboutImg" src={SarahNessa}/></div>
      
      <div id="about" className="text">
      <h2>Imagination overflow</h2>

      <p>Sarah Nessa is an oil painter residing in Southern California. Her work encompasses three different series – Under the Microscope, Travel Gems, and Nature x Spirit. </p>

      <p>Contact her for more information.</p>

      </div>

       </div>

    );
  }
}
 
export default About;

