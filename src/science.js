import React, { Component } from 'react';
import Lightroom from 'react-lightbox-gallery';
import './img/pollen.jpg';
import './img/neuron.jpg';
import './img/mitosis.jpg';
import './img/ecoli.jpg';
import './img/hiv.jpg';
import './img/prokaryote.jpg';

class Science extends Component {
  render() {

    const science_images = 
        [
          {
            src: '/static/media/pollen.3b49b120.jpg',
            desc: 'Pollen - The Seed of Reproduction',
            sub: 'Oil on Canvas - 36" x 36"'
          },
          {
            src: '/static/media/neuron.c1887243.jpg',
            desc: 'Endorphin Neuron - Feel Good Brain Power',
            sub: 'Oil on Canvas - 30" x 24"'
          },
          {
            src: '/static/media/mitosis.c19fa0ea.jpg',
            desc: 'Mitosis - Cellular Reproduction',
            sub: 'Oil on Canvas - 36" x 18"'
          },
          {
            src: '/static/media/ecoli.79595571.jpg',
            desc: 'E. coli - Friendly/Unfriendly Bacteria',
            sub: 'Oil on Canvas - 30" x 30"'
          },
          {
            src: '/static/media/prokaryote.b5e674f6.jpg',
            desc: 'Prokaryote - Primitive Creatures',
            sub: 'Oil on Canvas - 36" x 15"'
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
            images={science_images}
            settings={settings}
          />

        </div>
        
      </div>

    );
  }
};
 
export default Science;

