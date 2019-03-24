import React from 'react';
import {
    Link
  } from "react-router-dom";

class Popup extends React.Component {
    constructor() {
        super();
    
        this.state = {
            name: '',
            email: '',
            password: '',
            showPass: false,
            emailSame: false,
            userCreated: false
        };
    }
    handleName(text){
        this.setState({ name:text.target.value })
        
     }

    handleEmail(text){
        this.setState({ email:text.target.value })
        
     }
     handlePassword(text){
        this.setState({ password:text.target.value })
     }


  register = (e) => {
    e.preventDefault();
        let obj = {}
        obj.name = this.state.name;
        obj.email = this.state.email;
        obj.password = this.state.password
    
    fetch('https://staging-monggovest.herokuapp.com/api/v1/users/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "user": {
                "email": obj.email, 
                "password": obj.password,
                "name": obj.name,
             } 
                }),
            })
            .then((response) => response.json())
            
            // Validating email
            .then((responseJson) => {
                if( responseJson.status === "Not_acceptable" ){
                    this.setState({ 
                        emailSame:true,
                        userCreated:false
                    })      
                }
            
                else{
                    this.setState({ 
                        emailSame:false,
                        userCreated:true 
                    })  
                }
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

    const emailSame = this.state.emailSame;
    let emailSameWarn;
    if (emailSame) {
          emailSameWarn = <p className='text-center email'>Maaf, email sudah terdaftar.</p>
        }
    const userCreated = this.state.userCreated;
    let userCreatedWarn;
    if (userCreated) {
            userCreatedWarn = <p className='text-center email'>Registrasi berhasil! Silahkan Masuk untuk melanjutkan!</p>
        }

return (
        <div className="bg-img">
         <div className="signup d-flex justify-content-center">
         <div className="modal-bg reg">
            <div className="signup">
                    <p className="signup-title">DAFTAR</p>
                    <form onSubmit={(e) => { this.register(e);}}>
                    {/* form nama */}
                    <div className="signup-name">
                        <p className="name-title">Nama lengkap*</p>

                        <input
                            className="name-form"
                            name="name"
                            placeholder="Joko Sambodo" required
                            onChange={(text) => { this.handleName(text) }}
                        />
                    </div>

                    {/* form email */}
                    <div className="signup-email">
                        <p className="email-title">E-mail*</p>
                        <input
                            className="email-form"
                            type="email"
                            name="email"
                            placeholder="contoh@email.com"
                            onChange={(text) => { this.handleEmail(text) }}
                            required
                        />
                    </div>

                    <button className="pass-icon" onClick={this.togglePass}></button>
                    <img className="icon-stroke" alt="toggle" src={'https://res.cloudinary.com/monggovest/image/upload/v1543300074/icon/eye-regular-svg.svg'} />

                    {/* form pass */}
                    <div className="login-pass">
                        <p className="pass-title">Kata Sandi*</p>
                        <input
                            className="pass-form"
                            name="password"
                            id="pass-form"
                            type={(this.state.showPass ? 'text' : 'password')}
                            placeholder="x9cVLk"
                            pattern="^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                            onChange={(text) => { this.handlePassword(text) }}
                            required
                        />
                        <p className="pass-text">Pastikan kata sandi mengandung angka, huruf besar, dan huruf kapital, serta lebih dari 8 karakter.</p>
                    </div>

                    {emailSameWarn}
                    {userCreatedWarn}

                    <button type="submit" className="login-button" ><span className="lanjutkan">LANJUTKAN</span></button>
                    </form>
                    <div className="login-link">
                        <p className="text-center">Sudah Punya Akun ?<Link className="log-link" to="#" onClick={this.props.handleLogin}> Masuk Disini !</Link></p>
                    </div>

                </div>
            </div>
            <Link className="redirect-home" to='/' style={{marginTop: '650px', color: 'white'}}>Beranda</Link>  
            </div>
        </div>
        

    );
  }
}

export default Popup;