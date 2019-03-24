import React, { Component } from 'react';
import axios from 'axios';
import Typeproductandprice from './Typeproductandprice';
import HomeCarousel from './HomeCarousel';
import Tabinvestasi from './Tabinvestasi';
import Sharingbar from './Sharingbar';
import ButtonInvest from './ButtonInvest';
import SimilarProduct from './SimilarProduct';

export default class DetailInvestasi extends Component {

    // State API Page Detail Investasi
    state = {
        details: []
    }

    // Get API Page Detail Investasi
    componentDidMount() {
       
        let id = this.props.match.params.id
        axios.get(`https://staging-monggovest.herokuapp.com/api/v1/proinvdetail/` + id)
            .then(res => {
                let details = this.state.details.slice();
                details.push(res.data.results);
                this.setState({details});
            })
    }

    render(){
        return(
            <div>
                <div className='typeproductandprice'><center><Typeproductandprice details={this.state.details}/></center></div>
                <Sharingbar />
                <div className='divkonten'>
                    <div className='card-deck'>
                        <div className='card'><HomeCarousel details={this.state.details}/></div>
                        <div className='card'><Tabinvestasi details={this.state.details}/></div>
                    </div>
                </div>
                <ButtonInvest details={this.state.details} userId={this.props.userId} id={this.props.match.params.id}/>
                <SimilarProduct details={this.state.details}/>
            </div>
        )
    }
}
