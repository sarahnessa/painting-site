import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import HttpsRedirect from 'react-https-redirect';
  
ReactDOM.render(
    <HttpsRedirect>
        <App />
    </HttpsRedirect>, 
    document.getElementById('root')
);
