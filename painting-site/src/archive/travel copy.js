
import React, { Component } from 'react'
import joshuatree from './img/joshuatree.jpg'



class Travel extends Component {

	handleClick(e) {
		
		console.log(e.target);
		document.getElementById('fade').style.display = 'block';
		document.getElementById('lightboxContainer').style.display = 'inline-block';
		document.getElementById('lightboxImg').innerHTML = '<img src=' + e.target.src + '/>';
    document.getElementById('captionBox').innerHTML = e.target.alt;

      };

  unMount() {

    document.getElementById('fade').style.display = 'none';
		document.getElementById('lightboxContainer').style.display = 'none';

      };

  render() {
    return (
    	<div>

        
        <div className="gallery">
        

        <figure>

        	<div className="imgWrapper"><img onClick={(e) => this.handleClick(e)} className="paintingImg"  alt="Around the Joshua Tree" src={joshuatree} /></div>

          <figcaption>Around the Joshua Tree</figcaption>
        
        </figure>
        

      </div>




       <div id="lightboxContainer">
       <div id="light" className="white-content">
          <div className="lightboxContents">
              <button className="close" onClick={this.unMount}></button>
              <div id="lightboxImg"></div>
              <span id="captionBox"></span>
          </div>
        </div>
        </div>
       <div id="fade" className="black-overlay"></div>
      </div>




    );
  }
}
 
export default Travel;

