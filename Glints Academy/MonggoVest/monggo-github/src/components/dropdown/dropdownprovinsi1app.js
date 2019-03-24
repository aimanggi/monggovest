 import React, { Component } from 'react';
import Dropdown3 from './dropdownprovinsi1.js';

class Dropdown33 extends Component {
  render() {
    return( <div>
      <div>
        <Dropdown3
          name="venue[country_id]"
          items={[
            { value: 'Sumatera', id: 1 },
            { value: 'Jawa', id: 21 },
            { value: 'Kalimantan', id: 43 },
            { value: 'Sulawesi', id: 2 },
          ]}
        />
      </div>
    </div>)
  }
}

export default Dropdown33
