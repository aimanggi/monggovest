import React, { Component } from 'react';
import Invest from '../../img/Invest.svg';
import Cow from '../../img/Cow.svg';
import Pay from '../../img/Pay.svg';
import Result from '../../img/Result.svg';
import LihatInvestasi from '../../btn/LihatInvestasi';

class CaraKerja extends Component {
    render(){
        return(
            <div className="cara-kerja">
                <div className="cara-kerja-title">
                    <h1>LANGKAH MUDAH BERINVESTASI</h1>
                </div>
                <div className="cara-kerja-list">
                    <span className="cara-kerja-img-1">
                        <img src={Invest} alt="" />
                        <p>Pilih Instrumen Investasi</p>
                    </span>
                    <span className="round"></span>
                    <span className="round"></span>
                    <span className="cara-kerja-img-2">
                        <img src={Pay} alt="" />
                        <p>Lakukan Pembayaran</p>
                    </span>
                    <span className="round"></span>
                    <span className="round"></span>
                    <span className="cara-kerja-img-3">
                        <img src={Cow} alt="" />
                        <p>Modal Sampai Ke Peternak</p>
                    </span>
                    <span className="round"></span>
                    <span className="round"></span>
                    <span className="cara-kerja-img-4">
                        <img src={Result} alt="" />
                        <p>Tunggu Hasilnya</p>
                    </span>
                </div>
                <div className="butt">
                    <LihatInvestasi />
                </div>
            </div>
        )
    }
}

export default CaraKerja;