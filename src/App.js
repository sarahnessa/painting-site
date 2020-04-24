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

    this.state = { width: '' };

    this.hideBurger = this.hideBurger.bind(this);
    this.showBurger = this.showBurger.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.hideBurgerOnResize = this.hideBurgerOnResize.bind(this);
  }

  componentDidMount() {
    const paintingimg = document.getElementsByTagName('IMG');
    const close = document.querySelector('.fa-times');
    for(let i=0; i<paintingimg.length; i++) {
      paintingimg[i].addEventListener('click', this.hideBurger);
    }
    close.addEventListener('click', this.showBurger);
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUpdate() {
    this.hideBurgerOnResize();
  }
  
  hideBurger() {
    const burger = document.getElementsByClassName('burger-menu');
    
    for (let i=0; i<burger.length; i++) {
        burger[i].style.display = 'none';
    } 
  }

  updateWidth() {
    const w = window.innerWidth || document.documentElement.clientWidth;
    if (w <= 800) {
      this.setState({ width: 'mobile' });
    } else if (w > 800) {
      this.setState({ width: 'desktop' });
    }
  }

  hideBurgerOnResize() {
    const burger = document.getElementsByClassName('burger-menu');

    if (this.state.width === 'desktop') {
      for (let i=0; i<burger.length; i++) {
        burger[i].style.display = 'none';
      } 
    } else if (this.state.width === 'mobile') {
      for (let i=0; i<burger.length; i++) {
        burger[i].style.display = 'inline-block';
      } 
    }
  }

  showBurger() {
    const burger = document.getElementsByClassName('burger-menu');

    for (let i=0; i<burger.length; i++) {
      burger[i].style.display = 'inline-block';
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
