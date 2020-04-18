import React, { Component } from 'react';
import Lightroom from 'react-lightbox-gallery';
import { nature_images } from './images.js';

class Nature extends Component {
  
  render() {
      const settings = {
        columnCount:{
          default:2,
          mobile:1,
          tabIndex:2
        },
        mode: 'dark'
      }
    
      return (
        <div className="gallery-container">
          <div className="gallery">
                <Lightroom
                  images={nature_images}
                  settings={settings}
                />
          </div> 
        </div>
      );
    }
  };
 
export default Nature;

