import React, { Component } from 'react';
import Form from './Form';
import Invoice from './Invoice';
import {
  Link
} from "react-router-dom";

class Payment extends Component {
  render() {
    return (
      <div>
       <div className="mvfddbox2">    
     	<div className="spannbox">
     		<Link to='/user-investor'><span className="h1lengkapi">Lengkapi Data Diri</span></Link>
     		<span className="hpembayaran"> - Pembayaran </span>
      </div>
        
        <div className="mvfddbox1">        
      <div className="payment-box col-sm-6">
          <Form  items={[
            { value: 'Kartu Kredit / Online Debit', id: 0 },
            { value: 'Transfer Bank', id: 1 },
            { value: 'Indomaret', id: 2 },
            { value: 'Alfamart', id: 3 },
          ]}/>
          </div>
          <div className="payment-box col-sm-6">
          <Invoice />
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Payment;