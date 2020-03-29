import React, { Component } from 'react';
import Lightroom from 'react-lightbox-gallery';
import joshuatree from './img/joshua-tree.jpg';

class Travel extends Component { 
  render() {

    const travel_images = [
  
        {
          src: joshuatree,
          desc: 'Beyond the Joshua Tree',
          sub: 'Oil on Canvas - 40" x 30"'
        }
    
      ];

      const settings = {
        columnCount:{
          default:2,
          mobile:1,
          tab:1
        },
        mode: 'dark'
      }

      if (travel_images.length === 0) {
        return (
          <div class="loader-container">
              <div class="segment">
                <div class="ui active dimmer">
                  <div class="ui medium text loader">Loading</div>
                </div>
              </div>
          </div>
        );
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

