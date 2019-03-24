import React, { Component } from 'react';
import PopupLogin from './PopupLogin';
import PopupRegister from './PopupRegister';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: '',
      passValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
    
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  constructor(props) {
    super(props);

    this.state = {
      emailValue: '',
      passValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
    
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
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
      <div className="App">
        <button onClick={this.toggleLogin}>
          MASUK
        </button>
        
        <PopupLogin show={this.state.loginOpen}
          onClose={this.toggleLogin} register={this.toggleRegister}>
        </PopupLogin>

        <PopupRegister show={this.state.registerOpen}
          onClose={this.toggleRegister} login={this.toggleLogin}>
        </PopupRegister>
      </div>
    );
  }
}

export default App;