
import React, { Component } from 'react'
import Lightbox from './lib';
import './img/pollen.jpg'
import './img/neuron.jpg'
import './img/mitosis.jpg'
import './img/ecoli.jpg'
import './img/hiv.jpg'
import './img/prokaryote.jpg'


const science_images = 
        [
          {
            src: '/static/media/pollen.3b49b120.jpg',
            title: 'Pollen - The Seed of Reproduction',
            description: 'Oil on Canvas - 36" x 36"'
          },
          {
            src: '/static/media/neuron.c1887243.jpg',
            title: 'Endorphin Neuron - Feel Good Brain Power',
            description: 'Oil on Canvas - 30" x 24"'
          },
          {
            src: '/static/media/mitosis.c19fa0ea.jpg',
            title: 'Mitosis - Cellular Reproduction',
            description: 'Oil on Canvas - 36" x 18"'
          },
          {
            src: '/static/media/ecoli.79595571.jpg',
            title: 'E. coli - Friendly/Unfriendly Bacteria',
            description: 'Oil on Canvas - 30" x 30"'
          },
          {
            src: '/static/media/prokaryote.b5e674f6.jpg',
            title: 'Prokaryote - Primitive Creatures',
            description: 'Oil on Canvas - 36" x 15"'
          }
        ];

class Science extends Component {

 
      

  render() {

    return (
      <div>
      
              <div className="gallery">

                  <Lightbox
                    images={science_images}
                    thumbnailWidth='380px'
                    thumbnailHeight='380px'
                    showImageModifiers={false}
                    />


              </div>
        
      </div>

    );
  }
};
 
export default Science;

