
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
            title: 'Pollen',
            description: "Oil on Canvas - 3' x 3'"
          },
          {
            src: '/static/media/neuron.c1887243.jpg',
            title: 'Endorphin Neuron',
            description: "Oil on Canvas - 2.5' x 2'"
          },
          {
            src: '/static/media/mitosis.c19fa0ea.jpg',
            title: 'Mitosis',
            description: "Oil on Canvas - 3' x 1.5'"
          },
          {
            src: '/static/media/ecoli.79595571.jpg',
            title: 'E. coli',
            description: "Oil on Canvas - 2.5' x 2.5'"
          },
          {
            src: '/static/media/prokaryote.b5e674f6.jpg',
            title: 'Prokaryote',
            description: "Oil on Canvas - 3' x 1.25'"
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
}
 
export default Science;

