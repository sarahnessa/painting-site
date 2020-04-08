import React, { Component } from 'react';
import Lightroom from 'react-lightbox-gallery';
import { travel_images } from './images.js';

class Travel extends Component { 

  state = { loading: true };

  componentDidMount() {
    this.setState({ loading: false })
  }

  render() {

      const settings = {
        columnCount:{
          default:2,
          mobile:1,
          tabIndex:1
        },
        mode: 'dark'
      }

    if (this.state.loading) {
        return (
          <div className="loader-container">
            <div className="segment">
              <div className="ui active dimmer">
                <div className="ui medium text loader">Loading</div>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="gallery-container">
          <div className="gallery">
                <Lightroom
                  images={travel_images}
                  settings={settings}
                />
          </div> 
        </div>
      );
    }
  };
 
export default Travel;

