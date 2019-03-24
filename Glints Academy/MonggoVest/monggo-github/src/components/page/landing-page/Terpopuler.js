import React from 'react';
import axios from 'axios';
import LihatInvestasi from '../../btn/LihatInvestasi';
import Currency from 'react-currency-formatter';
import {
    Link
  } from "react-router-dom";

export default class Terpopuler extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
    axios.get(`https://staging-monggovest.herokuapp.com/api/v1/proinvdetails`)
        .then(res => {
        const products = res.data.results;
        this.setState({ 
            products:products });
        })
    }

  
    render(){
   
        // Sort with count view
        let mostViewed = this.state.products.sort((a, b) => b.count_view - a.count_view); 
        let firstThree = mostViewed.slice(0, 3)

        return(
            <div className="terpopuler">
                <h2 className="title-terpopuler">TERPOPULER</h2>
                <div className="card-deck resize">
                    { firstThree.map(product =>
                        <div className="card">
                             <img alt={product.product.name} width="100%" height="50%" src={product.pictures[0] ? product.pictures[0].photo.url : "https://res.cloudinary.com/monggovest/image/upload/v1547110490/icon/no_image_available.jpg"}/>
                            <div className="card-body">
                                <h5 className="card-title hewan1"><b>{ product.product.name }</b></h5>
                                <p className="card-text">{product.subdistrict_id},{product.regional.name}</p>
                        <p className="card-text"> {product.province.name}</p>
                        <p className="card-text harga1"><b><Currency quantity={product.product_invest.price} group={'.'} decimal={','} currency={'IDR'} /></b></p>
                                <p className="card-text"> <Link to={`/detail-invest/${product.id}`}><button type="button" className="btn btn-card-detail">Detail</button></Link></p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="butt">
                    <LihatInvestasi />
                </div>
            </div>
        )
    }
}
