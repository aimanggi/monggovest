import React, { Component } from 'react';
import Terpopuler from './Terpopuler';
import CaraKerja from './CaraKerja';
import Slideshow from './Slideshow';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Slideshow/>
        <CaraKerja/>
        <Terpopuler/>
      </div>
    );
  }
}

export default LandingPage;