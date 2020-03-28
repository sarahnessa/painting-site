import React, { Component } from 'react';
import Lightroom from 'react-lightbox-gallery';
import './img/joshua-tree.jpg';

class Travel extends Component { 
  render() {

    const travel_images = [
  
        {
          src: '/static/media/joshua-tree.25383b5d.jpg',
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

    if (!travel_images) {
      return (
        <div className="ui segment">
          <div className="ui active loader"></div>
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

