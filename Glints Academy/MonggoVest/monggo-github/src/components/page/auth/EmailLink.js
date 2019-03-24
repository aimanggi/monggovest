import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class EmailLink extends Component {
    constructor() {
        super();
    
        this.state = {
          email: '',
          emailSent : false,
          emailNotFound : false
        };
    }
     
    // Handling for input in form
    handleEmail(text){
        this.setState({ email:text.target.value })
        
     }
    
    // Submit form
     EmailLink = (e) => {
        e.preventDefault();
        let obj = {}
        obj.email = this.state.email;
      
    
    fetch('https://staging-monggovest.herokuapp.com/api/v1/password/forgot', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
            },
    body: JSON.stringify({
            
         "email": obj.email, 
                
                 }),
            })
            // Validating email
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
                    emailNotFound:true,
                    emailSent:false
                })
                
                })
            .then((response) => response.json())
            .then(
                this.setState({ 
                    emailNotFound:false,
                    emailSent:true 
                }) 
            )
            }
     
render() { 
    if(!this.props.show) {
        return null;
      }
    //   Warning message
      const emailNotFound = this.state.emailNotFound;
      let emailNotFoundWarn;
      if (emailNotFound) {
            emailNotFoundWarn = <p className='text-center email'>Maaf, email tidak terdaftar.</p>
          }
      const emailSent = this.state.emailSent;
      let emailSentWarn;
      if (emailSent) {
              emailSentWarn = <p className='text-center email'>Link ganti password berhasil dikirim. Silahkan cek email anda!</p>
          }
return (
    <div className="bg-img">
     <div className="emaillink d-flex justify-content-center">
        <div className="modal-bg link">
                    
                <div>
                    <p className="login-title link">LUPA PASSWORD ?</p>
                </div>
                <p className="pass-text link">Silakan isi email yang didaftarkan. Link untuk mereset password akan dikirim ke email tersebut.</p>
                <form onSubmit={(e) => { this.EmailLink(e);}}> 
           {/* form email */}
                <div className="login-email">
                    <p className="email-title">E-mail</p>
                    <input 
                        name="email"
                        className="email-form link"
                        placeholder="contoh@email.com" 
                        value={this.state.emailValue} 
                        onChange={(text) => { this.handleEmail(text) }} 
                        required
                    />
                </div>
               {emailNotFoundWarn}
               {emailSentWarn}
                <button type="submit" className="login-button" ><span className="lanjutkan">KIRIM LINK !</span></button>
                
                </form>
                <div className="login-link pass">
                </div>

           </div>
           <Link className="redirect-home email" to='/' style={{marginTop: '620px', color: 'white'}}>Beranda</Link>
    </div>    
   
    </div>   
    );
  }
}

export default EmailLink;
