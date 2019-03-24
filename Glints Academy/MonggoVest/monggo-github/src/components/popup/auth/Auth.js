import React, { Component } from 'react';
import PopupLogin from './PopupLogin';
import PopupRegister from './PopupRegister';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      loginOpen: false,
      registerOpen: false
    };
  }

  toggleLogin = () => {
    this.setState({
      loginOpen: !this.state.loginOpen,
      registerOpen: (this.registerOpen ? false:false)
    });
  }

  toggleRegister = () => {
    this.setState({
      registerOpen: !this.state.registerOpen,
      loginOpen: (this.loginOpen ? false:false)
    });
  }
 
  render() {
    return (
      <div className="App" style="z-index:999" >
        <button onClick={this.toggleLogin}>
          MASUK
        </button>
        
        <PopupLogin show={this.state.loginOpen}
          onClose={this.toggleLogin} handleRegister={this.toggleRegister}>
        </PopupLogin>

        <PopupRegister show={this.state.registerOpen}
          onClose={this.toggleRegister} handleLogin={this.toggleLogin}>
        </PopupRegister>
      </div>
    );
  }
}

export default App;