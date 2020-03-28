import React, { Component } from 'react';
import {
  Route,
  HashRouter,
  Switch
} from "react-router-dom";
import About from './About.js';
import Contact from './Contact.js';
import Science from './science.js';
import Nature from './nature.js';
import Travel from './travel.js';
import Navigation from './navigation.js';
import BurgerIcon from './BurgerIcon.js';
import Popup from 'reactjs-popup';
import Menu from './Menu.js';


class App extends Component {

  render() {

    return (

   	  <HashRouter>
  
          <div className="content">

            <div>

              <BurgerIcon open={false} />
              
              <Popup
                modal
                overlayStyle={{ background: "rgba(255,255,255,0.98)" }}
                trigger={open => <BurgerIcon open={open} />}
              >
                {close => <Menu close={close} />}
              </Popup>

            </div>

                <Navigation />
        
                <Switch>
                  <Route path='/About.js' component={About}/>
                  <Route path='/Contact.js' component={Contact} />
                  <Route exact path='/' component={Nature}/>
                  <Route exact path='/nature.js' component={Nature}/>
                  <Route path='/science.js' component={Science} />
                  <Route path='/travel.js' component={Travel}/>
                </Switch>
              
         </div>

      </HashRouter>


    );
  }
};

export default App;
