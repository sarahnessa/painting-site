import React, { Component } from 'react';
import Lightroom from 'react-lightbox-gallery';
import sakura from './img/sakura.jpg';
import succulent from './img/succulent.jpg';
import gingko from './img/gingko.jpg';
import cacti from './img/cacti.jpg';

class Nature extends Component {
  render() {

    const nature_images = 
      [
        {
          src: cacti,
          desc: 'The Lucid Ones',
          sub: 'Oil on Canvas - 36" x 60"',
          key: 1
        },
        {
          src: sakura,
          desc: 'Reaching Out to Sakura',
          sub: 'Oil on Canvas - 36" x 60"',
          key: 2
        },
        {
          src: succulent,
          desc: 'Amplification Succulents',
          sub: 'Oil on Canvas - 36" x 60"',
          key: 3
        },
        {
          src: gingko,
          desc: 'Looking for Light Gingko',
          sub: 'Oil on Canvas - 36" x 60"',
          key: 4
        }
      ];
      
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

