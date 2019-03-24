import React, { Component } from 'react';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import EmailLink from './EmailLink';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      loginOpen: true,
      registerOpen: false,
      emailOpen: false
    };
  }
  // toggle for pop up login, register and forgot password
  // If one component show, two other components will hidden
  toggleLogin = () => {
    this.setState({
      loginOpen: !this.state.loginOpen,
      registerOpen: (this.registerOpen ? false:false),
      emailOpen: (this.emailOpen ? false:false)
    });
    
  }

  toggleRegister = () => {
    this.setState({
      registerOpen: !this.state.registerOpen,
      loginOpen: (this.loginOpen ? false:false),
      emailOpen: (this.emailOpen ? false:false)
    });
  }

  toggleEmail = () => {
    this.setState({
      emailOpen: !this.state.emailOpen,
      loginOpen: (this.loginOpen ? false:false),
      registerOpen: (this.registerOpen ? false:false)
    });
  }
 
  render() {
    return (
      <div className="App">
        
        <LoginPage show={this.state.loginOpen}
          handleRegister={this.toggleRegister}
          handleEmail={this.toggleEmail}>
        </LoginPage>

        <RegisterPage show={this.state.registerOpen}
          handleLogin={this.toggleLogin}>
        </RegisterPage>

        <EmailLink show={this.state.emailOpen}
         
          handleLogin={this.toggleLogin}>
        </EmailLink>

      </div>
    );
  }
}

export default App;