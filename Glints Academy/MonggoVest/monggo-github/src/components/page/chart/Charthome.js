import React, { Component } from 'react';
import JSONdata from './data.json';
import Chartcode from './Chartcode';

class Charthome extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{
        labels: JSONdata.Prediksi.map(item => item.Bulan),
        datasets:[
          {
            label:'Periode (Bulan)',
            data:JSONdata.Prediksi.map(item => item.Harga),
            backgroundColor:[
              'rgba(23, 130, 217, 0.6)'
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Chartcode chartData={this.state.chartData} location="Anda" legendPosition="bottom"/>
      </div>
    );
  }
}

export default Charthome;
