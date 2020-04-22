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

  constructor(props) {
    super(props);

    this.hideBurger = this.hideBurger.bind(this);
    this.showBurger = this.showBurger.bind(this);
  }

  componentDidMount() {
    const paintingimg = document.getElementsByTagName('IMG');
    const close = document.querySelector('.fa-times');
    for(let i=0; i<paintingimg.length; i++) {
      paintingimg[i].addEventListener('click', this.hideBurger);
    }
    close.addEventListener('click', this.showBurger);
  }
  
  hideBurger() {
    const burger = document.getElementsByClassName('burger-menu');
    for (let i=0; i<burger.length; i++) {
        burger[i].style.display = 'none';
    } 
  }

  showBurger() {
    const burger = document.getElementsByClassName('burger-menu');
    if(window.innerWidth !== undefined && window.innerHeight !== undefined) { 
      var w = window.innerWidth;
    } else {  
      var w = document.documentElement.clientWidth;
    }
    if (w <= 800) {
      for (let i=0; i<burger.length; i++) {
        burger[i].style.display = 'inline-block';
      } 
    } else {
      for (let i=0; i<burger.length; i++) {
        burger[i].style.display = 'none';
      } 
    }
  }
  

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
