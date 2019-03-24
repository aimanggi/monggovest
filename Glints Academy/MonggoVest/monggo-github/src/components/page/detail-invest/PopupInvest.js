import React, { Component } from 'react';
import {
    Redirect,
  } from "react-router-dom";
  import decode from 'jwt-decode';
  import Currency from 'react-currency-formatter';


class App extends Component {
  state = {
    scrollBar: 0,
    year:0,
    lotPrice: 500000,
    submitted: false
   }

//    Handling for input in form
  handleChange = (e) => {
    let obj = {}
    // Turn String to number
    obj[e.target.name] = typeof e.target.value !== 'number' ? parseInt(e.target.value) : e.target.value
    this.setState(obj); 
  }

  handleYear = (e) => {
    let obj = {}
    // Turn String to number
    obj[e.target.name] = typeof e.target.value !== 'number' ? parseInt(e.target.value) : e.target.value
    this.setState(obj);
  }

  getToken() {
    return localStorage.getItem('id')
}

  invest = (e) => {
    e.preventDefault();
    let obj = {}
    obj.scrollBar = this.state.scrollBar;
    obj.year = this.state.year

    const token = this.getToken(); 
    const decoded = decode(token);

    // Store product id for invoice
    localStorage.setItem('prod', this.props.id)

    // Calculate total invesment
    let lotPrice = this.state.lotPrice
    let total = lotPrice * this.state.scrollBar

fetch('https://staging-monggovest.herokuapp.com/api/v1/userinvest', {
     method: 'POST',
     headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getToken(),
             },
    body: JSON.stringify(
           {
                "user_id": decoded.sub,
                "product_invest_id": 36,
                "investor_slot": obj.scrollBar,
                "investor_pay": total,
                "invest_year": obj.year,
             } 
    ),
})

.then((response) => response.json())
.then((responseJson) => {
        // Set investor id in local storage   
        localStorage.setItem('invest', responseJson.results.id)
       
        this.setState({
           submitted:true
       })
})
}

  render() {
    
    if(!this.props.show) {
        return null;
    }
    // Calculate total invesment
    let lotPrice = this.state.lotPrice
    let total = lotPrice * this.state.scrollBar

    // Redirect to form user investor detail if this form submitted
   if (this.state.submitted) {
       return <Redirect to="/user-investor" />}
    
    return (
    <div className="cover-opp">
        <div className= "invest-popup d-flex justify-content-center">
        <div className="modal-bg3 ">
                <div className="icon-exit"><button type="button" className="icon-x close" onClick={this.props.onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
        <p className="title-invest">INVESTASI</p>
        <form onSubmit={(e) => { this.invest(e);}}>
                {/* Lot Scroll Box */}
                <div className="scroll-invest">
                    <p className="scroll-label">Masukkan jumlah lot</p>
                        <div className="scroll-box"><p className="scroll-val" id="scroll-val">{this.state.scrollBar}</p></div>
        
                {/* Lot Scroll Bar */}
                        <div className="scroll-bar">
                            <input 
                                name="scrollBar" 
                                type="range" 
                                min="1" 
                                max="100" 
                                onChange={(e) => {this.handleChange(e)}} 
                                className="slider-scroll-bar" 
                                id="scroll-bar-range" 
                                required/>
                        </div>
                {/* Invest year form */}
                       <div className="login-email">
                        <p className="email-title">Tahun Invest</p>
                            <input 
                                type='number'
                                min='0'
                                name="year"
                                className="email-form" 
                                onChange={(e) => {this.handleYear(e)}}
                                required
                            />
                        </div>
      
    

                <div className="invest-info">
                    <p className="invest-harga-lot">Harga per lot:</p><span className="harga-lot"><Currency quantity={this.state.lotPrice} group={'.'} decimal={','} currency={'IDR'} /></span>
                    <p className="invest-harga-total">Total: </p><span className="harga-total"><Currency quantity={total} group={'.'} decimal={','} currency={'IDR'} /></span>   
                </div>
      

                <button type="submit" value="Submit" className="invest-button">LANJUTKAN</button>
      
                </div>  
        </form>    
    </div>
    </div>
    </div>
    );
  }
}

export default App;
