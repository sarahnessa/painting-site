
import React, { Component } from 'react'
import mitosis from './img/mitosis.jpg'
import pollen from './img/pollen.jpg'
import neuron from './img/neuron.jpg'
import hiv from './img/hiv.jpg'
import prokaryote from './img/prokaryote.jpg'
import ecoli from './img/ecoli.jpg'


class Science extends Component {

	handleClick(e) {
		
		console.log(e.target);
    console.log(e.target.src);
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

        	<div className="imgWrapper"><img onClick={(e) => this.handleClick(e)} className="paintingImg"  alt="Mitosis" src={mitosis} /></div>

          <figcaption>Mitosis</figcaption>
        
        </figure>
        
        <figure>

          	<div className="imgWrapper"><img onClick={(e) => this.handleClick(e)} className="paintingImg" alt="Pollen" src={pollen} /></div>
          
          <figcaption>Pollen</figcaption>
        
        </figure>
        
        <figure>
        	
        	<div className="imgWrapper"><img onClick={(e) => this.handleClick(e)} className="paintingImg" alt="Endorphin Neuron" src={neuron} /></div>
          
          <figcaption>Endorphin Neuron</figcaption>
        
        </figure>
        
        <figure>
      		
      		<div className="imgWrapper"><img onClick={(e) => this.handleClick(e)} className="paintingImg" alt="HIV Oil" src={hiv} /></div>
 
          <figcaption>HIV</figcaption>
        
        </figure>
        
        <figure>
 			
 			<div className="imgWrapper"><img onClick={(e) => this.handleClick(e)} className="paintingImg" alt="Prokaryote" src={prokaryote} /></div>

          <figcaption>Prokaryote</figcaption>
        
        </figure>
        
        <figure>

			<div className="imgWrapper"><img onClick={(e) => this.handleClick(e)} className="paintingImg" alt="E.coli" src={ecoli} /></div>

          <figcaption>E.coli</figcaption>
        
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
 
export default Science;

