import React, { Component } from 'react';
import Lightroom from 'react-lightbox-gallery';
import { travel_images } from './images.js';

class Travel extends Component { 

  render() {

      const settings = {
        columnCount:{
          default:2,
          mobile:1,
          tabIndex:1
        },
        mode: 'dark'
      }

      return (
        <div className="gallery-container">
          <div className="gallery">
                <Lightroom
                  images={travel_images}
                  settings={settings}
                />
          </div> 
        </div>
      );
    }
  };
 
export default Travel;

