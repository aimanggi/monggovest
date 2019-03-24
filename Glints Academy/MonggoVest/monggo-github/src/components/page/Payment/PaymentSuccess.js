import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class PaymentSuccess extends Component {
  render() {
    return (
        <div class="payment-success-wrapper">
            <div class="payment-success-container">
                <div class="payment-success-title">Transaksi Anda Sukses</div>
                <div class="payment-success-description">Bukti pembayaran telah dikirimkan ke email anda.</div>
                <div class="payment-success-button">
                    <Link to='/' className="btn btn-payment-success">Beranda</Link>
                    <Link to='/product-invest' className="btn btn-payment-success">List Product</Link>
                </div>
            </div>
        </div>
    );
  }
}

export default PaymentSuccess;