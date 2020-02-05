
import React, { Component } from 'react'


class Home extends Component {

	handleClick(e) {
		
		console.log(e.target);
		document.getElementById('fade').style.display = 'block';
		document.getElementById('light').style.display = 'block';
		document.getElementById('lightboxImg').innerHTML = '<img src=' + e.target.src + '/>';
        
      };

    unMount() {

    	document.getElementById('fade').style.display = 'none';
		document.getElementById('light').style.display = 'none';

      };
      
  render() {
    return (

        <div className="gallery">
        

        <figure>

        	<div className="img-wrapper"><img onClick={(e) => this.handleClick(e)} className="painting-img"  alt="Mitosis Oil Painting" src={mitosis} /></div>

          <figcaption>Mitosis</figcaption>
        
        </figure>
        
        <figure>

          	<div className="img-wrapper"><img onClick={(e) => this.handleClick(e)} className="painting-img" alt="Pollen Oil Painting" src={pollen} /></div>
          
          <figcaption>Pollen</figcaption>
        
        </figure>
        
        <figure>
        	
        	<div className="img-wrapper"><img onClick={(e) => this.handleClick(e)} className="painting-img" id="test" alt="Endrophin Neuron Oil Painting" src={neuron} /></div>
          
          <figcaption>Endorphin Neuron</figcaption>
        
        </figure>
        
        <figure>
      		
      		<div className="img-wrapper"><img onClick={(e) => this.handleClick(e)} className="painting-img" alt="HIV Oil Painting" src={hiv} /></div>
 
          <figcaption>HIV</figcaption>
        
        </figure>
        
        <figure>
 			
 			<div className="img-wrapper"><img onClick={(e) => this.handleClick(e)} className="painting-img" alt="Prokaryote Oil Painting" src={prokaryote} /></div>

          <figcaption>Prokaryote</figcaption>
        
        </figure>
        
        <figure>

			<div className="img-wrapper"><img onClick={(e) => this.handleClick(e)} className="painting-img" alt="E.coli Oil Painting" src={ecoli} /></div>

          <figcaption>E.coli</figcaption>
        
        </figure>

     

		       


      </div>
       <div id="light" className="white-content">
		        	<button className="close" onClick={this.unMount}></button>
		        	<div id="lightboxImg"></div>
		        </div>
       <div id="fade" className="black-overlay"></div>
      </div>


    );
  }
}
 
export default Home;

