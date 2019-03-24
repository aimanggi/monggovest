import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
 
export default class Slideshow extends React.Component {
    state = {
        pictures:[]
    }
 
    componentDidMount(){
        axios.get(`https://staging-monggovest.herokuapp.com/api/v1/sliders`)
        .then(res => {
            const pictures = res.data.results;
            this.setState({pictures:pictures});
        })
    }   

    sliderLoop(){
        let data = this.state.pictures
        return data.map(e => (
            {
                original: e.url,
              }
        ))
    }
  render() {
    if(!this.state.pictures) return null;
 
    return (
      <div className="headers">
        <ImageGallery showNav={false} items={this.sliderLoop()} showFullscreenButton={false} showPlayButton={false} autoPlay={true}/>
        <div className="header-intro">
            <div className="intro-title">Semua Orang Bisa Beternak</div>
            <div className="intro-description">Kelola keuangan anda dengan instrumen investasi yang terjangkau dan rendah resiko</div>
            <Link className="intro-btn" to="/product-invest">Mulai Beternak</Link>
        </div>
      </div>
    );
  }
 
}