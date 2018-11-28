import React, { Component } from 'react';
import './login.css';


class LoginEmail extends Component {
  render() {
    return (
        <div class="login-email">
        <p class="email-title">E-mail</p>
        <input class="email-form" placeholder="contoh@email.com" required />
        </div>
        
    );
  }
}

export default LoginEmail;
