
import React, { Component } from 'react'
import Lightbox from './lib';
import './img/joshua-tree.jpg'

const travel_images = [
  
          {
            src: '/static/media/joshua-tree.25383b5d.jpg',
            title: 'Joshua Tree',
            description: "Oil on Canvas - 3.33' x 2.5'"
          }
        
      ];


class Travel extends Component {

  

  render() {


    return (
      <div>
          

              <div className="gallery">
        
                 <Lightbox 
                    images={travel_images}
                    thumbnailWidth='380px'
                    thumbnailHeight='380px'
                    showImageModifiers={false}
                     />

              </div>
        
        
      </div>




    )
  }
}
 
export default Travel;

