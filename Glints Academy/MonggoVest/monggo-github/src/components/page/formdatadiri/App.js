import React , { Component } from 'react';
import '../../../assets/scss/components/page/formdatadiri/_filter.scss';
import Filters from './formdatadiri.js';
import {Link} from "react-router-dom";

class FormApp extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      formData : {}
    }
  }
  render() {
    return (
      <div>
        <div className="mvformwrapper1">
          <div className="mvformwrapper2">
            <span className="mv2Lengkapi">Lengkapi Data Diri - </span>
            <Link to='/payment' className="hpembayaran">Pembayaran</Link>
          </div>
            <Filters formData={this.state.formData}/> 
        </div>
      </div>
    );
  }
}
      
export default FormApp
  
 