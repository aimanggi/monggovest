import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
import Logo from '../page/Logo';
import appStore from '../img/App Store.svg';
import playStore from '../img/Play Store.svg';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="foot-info">
                    <div className="foot-logo">
                        <Logo />
                    </div>
                    <ul className="foot-list-1">
                        <li><NavLink to="/product-invest">Investasi</NavLink></li>
                        <li><NavLink to="/">Cara Kerja</NavLink></li>
                        <li><NavLink to="/">Tentang Kami</NavLink></li>
                    </ul>
                    <ul className="foot-list-2">
                        <li><NavLink to="/">Bantuan</NavLink></li>
                        <li><NavLink to="/">Kontak Kami</NavLink></li>
                    </ul>
                    <div className="foot-app">
                        <div className="foot-app-description">Download Aplikasi Smartphone</div>
                        <div className="foot-app-cta">
                            <NavLink to="/"><img src={appStore} alt="App Store"/></NavLink>
                            <NavLink to="/"><img src={playStore} alt="Play Store"/></NavLink>
                        </div>
                    </div>
                </div>
                <div className="foot-license">
                    Copyright 2018 - PT Monggovest Indonesia
                </div>
            </footer>
        )
    }
}

export default Footer;