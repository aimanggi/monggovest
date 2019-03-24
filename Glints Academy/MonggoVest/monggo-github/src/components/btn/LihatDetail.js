import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  
class LihatDetail extends Component {
    render(){
        return(
           <Link to='/detail-invest'><button type="button" className="btn btn-card-detail">Detail</button></Link>
        )
    }
}

export default LihatDetail;