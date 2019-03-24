import React, { Component } from 'react';
import {
    Link,
    withRouter
  } from "react-router-dom";

  
class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          wrongPass: false,
          isLoggedin: false,
          showPass: false
        };
    }

    // Handling for input in form
    handleEmail(text){
        this.setState({ email:text.target.value })  
     }
     handlePassword(text){
        this.setState({ password:text.target.value })  
     }

    //  Post to Backend
login = (e) => {
        e.preventDefault();
        let obj = {}
        obj.email = this.state.email;
        obj.password = this.state.password
    
    fetch('https://staging-monggovest.herokuapp.com/api/v1/user_token', {
         method: 'POST',
         headers: {
                'Content-Type': 'application/json',
                 },
        body: JSON.stringify({
                "auth": {
                     "email": obj.email, 
                     "password": obj.password
                 } 
                }),
            })
            // Validating password
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
                    wrongPass: true,
                    isLoggedin:false
                })    
                })
            
            .then((responseJson) => {
                // Store user JWT to local storage 
                localStorage.setItem('id', responseJson.jwt)
                this.setState({ 
                            wrongPass:false,
                            isLoggedin:true
                        })    
                        // Redirect to landing page 
                        this.props.history.push("/"); 
                        })
            }

    // Handle for showing password 
  togglePass = () => {
    this.setState({ showPass: !this.state.showPass })
  }


  render() { 
    if(!this.props.show) {
        return null;
      }
    
    const wrongPass = this.state.wrongPass;
    let wrongPassWarn;
    if (wrongPass) {
          wrongPassWarn = <p className='text-center email'>Maaf, Email/Password yang anda masukkan salah.</p>
        }
  
return (
    
     <div className="bg-img">
     <div className="login d-flex justify-content-center">
        <div className="modal-bga">
                      
                <div>
                    <p className="login-title">MASUK</p>
                </div>
            
           {/* form email */}
           <form onSubmit={(e) => { this.login(e);}} onClick={this.props.userData}>
                <div className="login-email">
                    <p className="email-title">E-mail</p>
                    <input 
                        name="email"
                        className="email-form"
                        placeholder="contoh@email.com" 
                        value={this.state.email} 
                        onChange={(text) => { this.handleEmail(text) }} 
                        required
                    />
                </div>

                <button className="pass-icon" onClick={this.togglePass}></button>
                <img className="icon-stroke" alt="toggle" src={'https://res.cloudinary.com/monggovest/image/upload/v1543300074/icon/eye-regular-svg.svg'} />
        
            {/* form password */}
               <div className="login-pass">
                     <p className="pass-title">Password</p>
                    <input 
                        name="password"
                        className="pass-form" 
                        id="pass-form" 
                        type={(this.state.showPass ? 'text' : 'password' )}
                        placeholder="password" 
                        value={this.state.password} 
                        onChange={(text) => { this.handlePassword(text) }}
                        required 
                    />
              </div>
                {wrongPassWarn}
         
                <button type="submit" value="Submit" className="login-button"><span className="lanjutkan">LANJUTKAN</span></button>
                
            </form>
            <div className="login-link">
                <p className="text-center">Lupa Password ?<Link className="forget-link" to="#" onClick={this.props.handleEmail}> Klik Disini !</Link></p>
                <p className="text-center bottom">Belum Punya Akun ?<Link className="reg-link" to="#" onClick={this.props.handleRegister}> Register Disini !</Link></p>
               
            </div>
        </div>
       
        <Link className="redirect-home" to='/' style={{marginTop: '620px', color: 'white'}}>Beranda</Link>  
        
        </div> 
    </div>

    );
  }
}

export default withRouter(LoginPage);
