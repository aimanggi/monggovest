import React, { Component } from 'react';
import Dropdown4 from './dropdownsumberpenghasilan.js';

class Dropdown44 extends Component {
  render() {
    return( <div>
      <div>
        <Dropdown4
          name="venue[country_id]"
          items={[    
            { value: 'Gaji', id: 1 },
            { value: 'Hasilusaha', id: 2 },
            { value: 'Tabungan', id: 3 },
            { value: 'Warisan', id: 4 },
            { value: 'Lainnya', id: 5 },            
          ]}
        />
      </div>
    </div>)
  }
}

export default Dropdown44
