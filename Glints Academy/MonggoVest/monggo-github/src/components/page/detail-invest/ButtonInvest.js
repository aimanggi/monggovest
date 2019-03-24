import React, { Component } from 'react';
import PopupInvest from './PopupInvest';
import {
  Link
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  openPopup = () => {
    this.setState({
      isOpen: true
    });
    window.scrollTo(0,0)
  }

  closePopup = () => {
    this.setState({
      isOpen: false
    });
  }

  redirectLogin(){
    if(localStorage.getItem("id")){
     return( <button className="btn btn-invest-detail" onClick={this.openPopup}> LAKUKAN INVESTASI</button>) 
    }
    else{
      return ( <Link to="/login"><button className="btn btn-invest-detail"> LAKUKAN INVESTASI</button></Link>)
    }
  }

  render() {
    return (
      <div className="App d-flex justify-content-center">
        {this.redirectLogin()}
        <PopupInvest 
          show={this.state.isOpen}
          onClose={this.closePopup}
          userId={this.props.userId}
          id={this.props.id}>
        </PopupInvest>
      </div>
    );
  }
}

export default App;