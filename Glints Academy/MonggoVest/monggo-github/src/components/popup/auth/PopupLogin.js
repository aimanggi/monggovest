import React, { Component } from 'react';

class Login extends Component {
  
  state = {
    showPass: false
  }
  togglePass = () => {
    this.setState({ showPass: !this.state.showPass })
  }



  render() { 
    if(!this.props.show) {
      return null;
    }
    return (
     <div className="login d-flex justify-content-center">
        <div className="modal-bg">
                <div className="icon-exit">
                    <button 
                        type="button" 
                        className="icon-x close" 
                        onClick={this.props.onClose} 
                        aria-label="Close">

                        <span aria-hidden="true">&times;</span>
                        
                    </button>
                </div>
       
                <div>
                    <p className="login-title">MASUK</p>
                </div>
            
           {/* form email */}
                <div className="login-email">
                    <p className="email-title">E-mail</p>
                    <input 
                        name="email"
                        className="email-form"
                        placeholder="contoh@email.com" 
                        value={this.state.emailValue} 
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <button className="pass-icon" onClick={this.togglePass}></button>
                <img className="icon-stroke" src={'https://res.cloudinary.com/monggovest/image/upload/v1543300074/icon/eye-regular-svg.svg'} />
        
            {/* form password */}
               <div className="login-pass">
                     <p className="pass-title">Password</p>
                    <input 
                        name="password"
                        className="pass-form" 
                        id="pass-form" 
                        type={(this.state.showPass ? 'text' : 'password' )} 
                        placeholder="password" 
                        value={this.state.passValue} 
                        onChange={this.handleChange}
                        required 
                    />
              </div>

                
                <button type="submit" value="Submit" onSubmit={this.handleSubmit} className="login-button"><span className="lanjutkan">LANJUTKAN</span></button>
          

            <div className="login-link">
                <p className="text-center">Lupa Password ?<a className="forget-link" > Klik Disini !</a></p>
                <p className="text-center">Belum Punya Akun ?<a className="reg-link" href="#" onClick={this.props.handleRegister}> Register Disini !</a></p>
            </div>
        </div>
    </div>    
        
        
    );
  }
}

export default Login;
