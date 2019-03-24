import React, { Component } from 'react';
import {
  Link
  } from "react-router-dom";

class LihatInvestasi extends Component {
    render(){
        return(
            <div>
                <Link to="/product-invest">
                    <button type="button" className="btn btn-invest">LIHAT INVESTASI</button>
                </Link>
            </div>
        )
    }
}

export default LihatInvestasi;