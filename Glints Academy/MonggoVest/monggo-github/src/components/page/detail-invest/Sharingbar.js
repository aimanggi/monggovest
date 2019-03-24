import React, { Component } from 'react';
import imgSebarkan from '../../img/sebarkan.png';
import imgCinta from '../../img/cinta.png';

class Sharingbar extends Component{
    render(){
        return(
            <div className='sharingbar'>
                <img className='sebarkan' width='20px' height='20px' src={imgSebarkan} alt='Sebarkan Coy' />
                <img className='cinta' width='20px' height='20px' src={imgCinta} alt='Love this section' />
            </div>
        )
    }
}

export default Sharingbar;