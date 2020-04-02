import React, { Component } from 'react';
import Lightroom from 'react-lightbox-gallery';
import pollen from './img/pollen.jpg';
import neuron from './img/neuron.jpg';
import mitosis from './img/mitosis.jpg';
import ecoli from './img/ecoli.jpg';
import prokaryote from './img/prokaryote.jpg';

class Science extends Component {
  render() {

    const science_images = 
        [
          {
            src: pollen,
            desc: 'Pollen - The Seed of Reproduction',
            sub: 'Oil on Canvas - 36" x 36"',
            key: 1
          },
          {
            src: neuron,
            desc: 'Endorphin Neuron - Feel Good Brain Power',
            sub: 'Oil on Canvas - 30" x 24"',
            key: 2
          },
          {
            src: mitosis,
            desc: 'Mitosis - Cellular Reproduction',
            sub: 'Oil on Canvas - 36" x 18"',
            key: 3
          },
          {
            src: ecoli,
            desc: 'E. coli - Friendly/Unfriendly Bacteria',
            sub: 'Oil on Canvas - 30" x 30"',
            key: 4
          },
          {
            src: prokaryote,
            desc: 'Prokaryote - Primitive Creatures',
            sub: 'Oil on Canvas - 36" x 15"',
            key: 5
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
            images={science_images}
            settings={settings}
          />

        </div>
      </div>
    );
  }
};
 
export default Science;

