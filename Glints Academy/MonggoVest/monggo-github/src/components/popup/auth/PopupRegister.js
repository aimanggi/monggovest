import React from 'react';

class Popup extends React.Component {
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
    <div className="signup d-flex justify-content-center">
        <div className="modal-bg">
            <div className="icon-exit"><button className="icon-x close" onClick={this.props.onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
        <div className="signup">
        
        <p class="signup-title">DAFTAR</p>

        {/* form nama */}
        <div className="signup-name">
             <p className="name-title">Nama lengkap*</p>

            <input 
                className="name-form" 
                placeholder="Joko Sambodo" required 
            />
        </div>
        
        {/* form email */}
        <div className="signup-email">
            <p className="email-title">E-mail*</p>
            <input 
                className="email-form" 
                placeholder="contoh@email.com" 
                required 
              />
        </div>

        <button className="pass-icon" onClick={this.togglePass}></button>
            <img className="icon-stroke" src={'https://res.cloudinary.com/monggovest/image/upload/v1543300074/icon/eye-regular-svg.svg'} />

        {/* form pass */} 
        <div className="login-pass">
             <p className="pass-title">Kata Sandi*</p>
            <input 
                className="pass-form" 
                id="pass-form" 
                type={(this.state.showPass ? 'text' : 'password' )} 
                placeholder="x9cVLk" 
                pattern="^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" 
                required 
            />
            <p className="pass-text">Pastikan kata sandi mengandung angka, huruf besar, dan huruf kapital, serta lebih dari 6 karakter.</p>
      </div>
      
            <button className="login-button"><span className="lanjutkan">LANJUTKAN</span></button>
      <div className="login-link">
            <p className="text-center">Sudah Punya Akun ?<a class="log-link" href="#" onClick={this.props.handleLogin}> Masuk Disini !</a></p>
      </div>

        </div> 
        </div>
        
    </div>

    );
  }
}

export default Popup;