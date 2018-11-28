import React, { Component } from 'react';
import './login.css';


class Login extends Component {
  state = {
    showPass: false
  }
  togglePass = () => {
    this.setState({ showPass: !this.state.showPass })
  }
  render() { 
    return (
      <div className="login d-flex justify-content-center">
        <div className="modal-bg">
            <div className="icon-exit"><button type="button" className="icon-x close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
       
          <div>
              <p className="login-title">MASUK</p>
          </div>
            
          <div className="login-email ">
              <p className="email-title">E-mail</p>
              <input className="email-form" placeholder="contoh@email.com" required />
          </div>
          <button className="pass-icon" onClick={this.togglePass}></button>
            <img className="icon-stroke" src={'https://res.cloudinary.com/monggovest/image/upload/v1543300074/icon/eye-regular-svg.svg'} />
        
          <div className="login-pass">
            <p className="pass-title">Password</p>
            <input className="pass-form" id="pass-form" type={(this.state.showPass ? 'text' : 'password' )} placeholder="password" required />
          </div>

          
            
            <button className="login-button"><span className="lanjutkan">LANJUTKAN</span></button>
          

        <div className="login-link">
            <p className="text-center">Lupa Password ?<a className="forget-link" href="#"> Klik Disini !</a></p>
            <p className="text-center">Belum Punya Akun ?<a className="reg-link" href="#"> Register Disini !</a></p>
        </div>
        </div>
        </div>    
        
        
    );
  }
}

export default Login;
