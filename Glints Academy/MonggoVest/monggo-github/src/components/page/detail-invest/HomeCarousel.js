import React from 'react';
import ImageGallery from 'react-image-gallery';
 
export default class HomeCarousel extends React.Component {
    state = {
        details: this.props.details
    }

    sliderLoop(){
        let data = this.props.details;
        return data.map(e => (
            {
                original: e.pictures[0].photo.url,
              }
        ))
    }
    render() {
    if(!this.props.details) return null;
 
    return (
      <ImageGallery items={this.sliderLoop()} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} autoPlay={true}/>
    );
  }
 
}