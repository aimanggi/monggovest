import React, { Component } from 'react';
import {
  NavLink,
  Link
} from "react-router-dom";
import decode from 'jwt-decode';
import imgLogo from '../img/monggoLogo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

const logoStyle = {
    height: 'auto',
    width: '100px'
};

const LoginButton =
    
 <Link style={{padding:'6px 16px', marginTop:'10px'}} className="BTN1" to="/login">
         <span style={{padding:'10px 10px'}}>Masuk</span>
 </Link>
    

class Navbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: '',
          name: '',
          email: '',
          isLoggedin: false,
          userSession: false,
                    
        };
        this.logout = this.logout.bind(this);
    }
   
    // Get token in local storage to identify user session
    getToken() {
        return localStorage.getItem('id')
    }
    
    // Checking session valid or not
    loggedIn() {
        const token = this.getToken() 
        return !!token && !this.isTokenExpired(token) 
    }

    // Validating session with exp from JWT
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { 
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    
    }

    // For log out button
    logout() {
        localStorage.removeItem('id');
        this.setState ({
            userSession : false,
            isLoggedin : false,
        })
    }

    // For responsive navbar
    responsiveNavbar() {
        var x = document.getElementById("navbar");
        if (x.className === "topnav") {
            x.className += " open";
        } else {
            x.className = "topnav";
        }
    }
    
    // Get user info
    componentDidMount() {
        if(this.getToken()){
            let url = 'https://staging-monggovest.herokuapp.com/api/v1/users/current'
            const headers = {
                  'Content-Type': 'application/json'
                }
            if (this.loggedIn()) {
                headers['Authorization'] = 'Bearer ' + this.getToken()
            }
        
            return fetch(url, {
                headers
            })
    
            .then((response) => {
                if(response.ok){
                return response.json();    
                }
                else{
                    throw response;
                }
                
            })
            .catch(err =>{
                this.setState({ 
                    userSession: false,
                    isLoggedin:false
                 })              
                })
    
        
           .then((responseJson) => {
                this.setState({ 
                    id: responseJson.id,
                    name: responseJson.name,
                    email: responseJson.email,
                    
                 }) 
                 this.setState({
                    isLoggedin: true,
                    userSession: true
                 })   
            });
        }
      }

        // Window scroll to component acording link in navbar
        handleScrollCaraKerja(){
            window.scrollTo({top:900, behavior:'smooth'})
        }

        handleScrollInvestasi(){
            window.scrollTo({top:1400, behavior:'smooth'})
        }

    render(){
    // Show user name if user session valid
    const isLoggedin = this.state.isLoggedin;
    let greet;
    if (isLoggedin) {
        greet = <div className="greet">Hallo, {this.state.name}</div>
    }

    const userSession= this.state.userSession;
  
        return(
            <div>

                <div className="nav-bar">
                    <NavLink className='navlogo' to="/"><img src={imgLogo} style={logoStyle} alt="Logo" /></NavLink>
                    <NavLink className='nav-icon' onClick={this.responsiveNavbar} to="#"><FontAwesomeIcon icon="bars" /> </NavLink>
                    <div className="topnav" id="navbar">
                        <NavLink className='navstyle' to="#" onClick={this.handleScrollCaraKerja}>Cara Kerja</NavLink>
                        <NavLink className='navstyle' to="#" onClick={this.handleScrollInvestasi}>Investasi</NavLink>
                        <NavLink className='navstyle' to="/tentangkami">Tentang Kami</NavLink>
                        <NavLink className='navstyle' to="/bantuan">Bantuan</NavLink>
                        {greet}
                        {/* Toggle for login and logout button */}
                        <div className='auth-btn'>{userSession ? 
                        <button onClick={this.logout} className="BTN1">Keluar</button>
                                : <span>{LoginButton}</span>}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Navbar;
