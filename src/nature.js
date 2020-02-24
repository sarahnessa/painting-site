import React, { Component } from 'react';
import Lightroom from 'react-lightbox-gallery';
import './img/sakura.jpg';
import './img/succulent.jpg';
import './img/gingko.jpg';
import './img/cacti.jpg';

class Nature extends Component {
  render() {

    const nature_images = 
      [
        {
          src: '/static/media/cacti.ad23d235.jpg',
          desc: 'The Lucid Ones',
          sub: 'Oil on Canvas - 36" x 60"'
        },
        {
          src: '/static/media/sakura.c16b779f.jpg',
          desc: 'Reaching Out to Sakura',
          sub: 'Oil on Canvas - 36" x 60"'
        },
        {
          src: '/static/media/succulent.119232b1.jpg',
          desc: 'Amplification Succulents',
          sub: 'Oil on Canvas - 36" x 60"'
        },
        {
          src: '/static/media/gingko.472c5cb8.jpg',
          desc: 'Looking for Light Gingko',
          sub: 'Oil on Canvas - 36" x 60"'
        }
      ];
      
      const settings = {
        columnCount:{
          default:2,
          mobile:1,
          tab:4
        },
        mode: 'dark'
      }

    return (
    	<div>
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

