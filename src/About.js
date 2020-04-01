import React, { Component } from 'react'
import SarahNessa from './img/4.jpg'

class About extends Component {

  render() {
    return (
       <div id="about-container">
       
        <div id="img-container"><img alt="Sarah Nessa Oil Painter" className="about-img" src={SarahNessa}/></div>
        
        <div id="about" className="text">
          
          <h2>Imagination overflow</h2>

          <p>Vibrant colors elucidating inner worlds. All original artwork inspired through meditative awareness and transcendental contemplation.</p>

          <p>Visual patterns between human and tiny life organisms. Echoes of primordial creation.</p>

          <p>Locations seen through the lens of previous perspectives. Simplistic and sophisticated views.</p>

        </div>

       </div>

    );
  }
}
 
export default About;

