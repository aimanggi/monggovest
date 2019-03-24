import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';

class Notfound extends Component {
  render() {
    return (
      <div id="oopss">
          <div id="container">
            <div id="error-text">
              <span>404</span>
              <p>Maaf halaman yang and cari tidak ditemukan </p>
              <p class Name="hmpg"><Link exact to="/" class="back">Back To Homepage</Link></p>
            </div>
          </div>
      </div>
    );
  }
}
export default Notfound;