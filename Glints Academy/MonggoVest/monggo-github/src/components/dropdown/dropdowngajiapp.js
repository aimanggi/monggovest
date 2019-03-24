  import React, { Component } from 'react';
import Dropdown1 from './dropdowngaji.js';

class Dropdown11 extends Component {
  render() {
    return( <div>
      <div>
        <Dropdown1
          name="venue[country_id]"
          items={[
            { value: 'Rp 1.000.000,00 - Rp 4.999.999,00', id: 1 },
            { value: 'Rp 5.000.000,00 - Rp 9.999.999,00', id: 2 },
            { value: 'Rp 10.000.000,00 - Rp 19.999.999,00', id: 3 },
            { value: 'Rp 20.000.000,00 - Rp 49.999.999,00', id: 4 },
            { value: 'Rp 50.000.000,00 ke atas', id: 5 },            
          ]}
        />
      </div>
    </div>)
  }
}

export default Dropdown11
