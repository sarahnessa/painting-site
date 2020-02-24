import React from "react";
import { NavLink } from "react-router-dom";


export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><NavLink exact to='/'>Paintings</NavLink></li>
      <li onClick={close}><NavLink to='/about.js'>About</NavLink></li>
      <li onClick={close}><NavLink to='/contact.js'>Contact</NavLink></li>
    </ul>
  </div>
);