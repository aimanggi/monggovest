import React from 'react';
import Dropdown2 from './dropdownidentitas.js';

class Dropdown22 extends React.Component {
   constructor(props){
     super(props);
  this.state = {
    inputVal: props.inputValue
  }

  // preserve the initial state in a new object
  this.baseState   = this.state 

} 
render () {
 return (
  <div>
    <div>
      <div>
        <Dropdown2
          name="venue[country_id]"
          items={[
            { value: 'KTP', id: 1 },
            { value: 'SIM', id: 2 },
            { value: 'NPWP', id: 3 },
          ]}   
          mouse={this.baseState}   
        />
      </div>
    </div>
 </div>
 );
}
}
export default Dropdown22