import React, { Component } from 'react';
import axios from 'axios';
import Currency from 'react-currency-formatter';

class Invoice extends Component {
  state = {
    products: [],
    invest:[]
}

// Get token in local storage to identify user session
getProduct() {
  return localStorage.getItem('prod')
}

getInvest() {
  return localStorage.getItem('invest')
}

componentDidMount() {
axios.get(`https://staging-monggovest.herokuapp.com/api/v1/proinvdetail/` + this.getProduct())
    .then(res => {
    const products = res.data.results;
    this.setState({ 
        products:products });
    })

    axios.get(`https://staging-monggovest.herokuapp.com/api/v1/userinvest/` + this.getInvest())
    .then(res => {
    const invest = res.data.results;
    this.setState({ 
        invest:invest });
    })
    
}

  render() {
    return (
      <div className="invoice-wrapper">
          <div className="invoice-container">
            <div className="invoice-title">Rincian</div>
            <div className="invoice-product invoice-product-name">{this.state.products.product ? this.state.products.product.name : ""}</div>
            <div className="invoice-product invoice-product-lot">{this.state.invest.investor_slot} Lot</div>
            <div className="invoice-detail invoice-detail-list">
              <ul>
                <li>Harga per Lot</li>
                <li>Periode Kontrak</li>
                <li>Return yang Didapat</li>
                <li>Periode Bagi Hasil</li>
              </ul>
            </div>
            <div className="invoice-detail invoice-detail-result">
              <ul>
                <li>: <Currency quantity={this.state.products.product_invest ? this.state.products.product_invest.slot : ""} group={'.'} decimal={','} currency={'IDR'} /></li>
                <li>: {this.state.products.period} tahun</li>
                <li>: {this.state.products.return_value}% per tahun</li>
                <li>: setelah {this.state.products.share_periode} tahun</li>
              </ul>
            </div>
            <div className="invoice-line"></div>
            <div className="invoice-total invoice-total-total">Total</div>
            <div className="invoice-total invoice-total-result"><Currency quantity={this.state.invest.investor_pay} group={'.'} decimal={','} currency={'IDR'} /></div>
          </div>
      </div>
    );
  }
}

export default Invoice;