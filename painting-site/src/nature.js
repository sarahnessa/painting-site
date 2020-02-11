
import React, { Component } from 'react'
import Lightbox from './lib';
import './img/sakura.jpg'
import './img/succulent.jpg'
import './img/gingko.jpg'
import './img/cacti.jpg'

 const nature_images = 
        [
          {
            src: '/static/media/cacti.ad23d235.jpg',
            title: 'The Lucid Ones',
            description: 'Oil on Canvas - 36" x 60"'
          },
          {
            src: '/static/media/sakura.c16b779f.jpg',
            title: 'Reaching Out to Sakura',
            description: 'Oil on Canvas - 36" x 60"'
          },
          {
            src: '/static/media/succulent.119232b1.jpg',
            title: 'Amplification Succulents',
            description: 'Oil on Canvas - 36" x 60"'
          },
          {
            src: '/static/media/gingko.472c5cb8.jpg',
            title: 'Looking for Light Gingko',
            description: 'Oil on Canvas - 36" x 60"'
          }
        ];


class Nature extends Component {

	

  render() {

    return (
    	<div>
              <div className="gallery">

                <Lightbox
                images={nature_images}
                thumbnailWidth='380px'
                thumbnailHeight='380px'
                showImageModifiers={false}
                />

            </div>
        
      </div>

    );
  }
};
 
export default Nature;

