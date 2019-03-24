import React, { Component } from 'react';
import {
    NavLink
  } from "react-router-dom";
import imgLogo from '../img/monggoLogo.png';

class Logo extends Component {
    render(){
        return(
            <NavLink to="/">
                <img src={imgLogo} alt="" />
            </NavLink>
        )
    }
}

export default Logo;