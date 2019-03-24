import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";


class ChangePass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          passValue: '',
          newPassValue: '',
          error: false,
          done: false
        };
    }

    // Handling for input in form
    handlePassword(text){
        this.setState({ passValue:text.target.value })
     }

     handleNewPassword(text){
        this.setState({ newPassValue:text.target.value }) 
     }

    // validating for two input password is same and submit
    validateResetForm = (e) => {
        e.preventDefault();
        if(this.state.passValue !== this.state.newPassValue){
            this.setState({ error:true })
            this.setState({ done:false })
            
        }else{
            this.ChangePass();
            this.setState({ done:true })
            this.setState({ error:false })
        }
      }
 
    ChangePass() {     
        let obj = {}
        // Get token from param in URL
        let token = this.props.match.params.token
        obj.pass = this.state.passValue;
        obj.newPass = this.state.newPassValue;
      
        // Post to Backend 
        fetch('https://staging-monggovest.herokuapp.com/api/v1/password/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
                body: JSON.stringify({
                    "password": obj.newPass,
                    "token":token              
            }),
            })
            .then((response) => response.json())
            }
     
render() {
    // Warning message
    const error = this.state.error;
    let alert;
    if (error) {
        alert = <p className='text-center email'>Password not match</p>
    }
    const done = this.state.done;
    let success;
    if (done) {
        success = <p className='text-center email'>Ganti Password Berhasil</p>
    }
 

return (
    <div className="bg-img">
     <div className="emaillink d-flex justify-content-center">
        <div className="modal-bg change" style={{height: '480px'}}>
                    
                <div>
                    <p className="login-title link">GANTI PASSWORD</p>
                </div>
                <p className="pass-text link">Silakan masukkan Password baru !</p>
                  
        <form onSubmit={(e) => { this.validateResetForm(e);}}> 
           {/* form password */}
           <div className="login-pass">
                     <p className="pass-title">Password Baru*</p>
                    <input 
                        name="password"
                        className="pass-form" 
                        id="pass-form" 
                        type={(this.state.showPass ? 'text' : 'password' )}
                        placeholder="password"
                        pattern="^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                        value={this.state.passValue} 
                        onChange={(text) => { this.handlePassword(text) }}
                        required 
                    />
              </div>
            
            {/* form password */}
            <div className="login-pass">
                     <p className="pass-title">Konfirmasi Password Baru*</p>
                    <input 
                        name="password"
                        className="pass-form" 
                        id="new-pass-form" 
                        type={(this.state.showPass ? 'text' : 'password' )}
                        placeholder="password" 
                        value={this.state.newPassValue} 
                        onChange={(text) => { this.handleNewPassword(text) }}
                        required 
                    />
              </div>
                <p className="pass-text change" style={{marginBottom: '10px'}}>Pastikan kata sandi mengandung angka, huruf besar, dan huruf kapital, serta lebih dari 8 karakter.</p>
                {alert}
                {success}
                <button type="submit" className="login-button" ><span className="lanjutkan">GANTI PASSWORD</span></button>
                
         </form>
                <div className="login-link pass">
                        <p className="text-center">Kembali ke<Link className="log-link pass" to="/"> beranda</Link></p>
                </div>
           </div>
    </div>    
        
    </div>   
    );
  }
}

export default ChangePass;
