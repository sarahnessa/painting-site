import React, { Component } from 'react;
import HttpsRedirect from 'react-https-redirect';
 
 
class HttpsApp extends Component {
 
  render() {
    return (
      <HttpsRedirect>
        <App />
      <HttpsRedirect/>
    );
  }
}