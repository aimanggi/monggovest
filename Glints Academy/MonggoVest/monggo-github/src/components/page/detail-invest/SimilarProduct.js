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
    axios.get(`https://staging-monggovest.herokuapp.com/api/v1/prodinvests`)
        .then(res => {
        const products = res.data.results;
        this.setState({ 
            products:products });
        })
    }

    reload(){
        return window.location.reload()
    }

    render(){

         // Sort by similar product
        let type = this.state.products.filter( product => product.product.product_type === this.props.details[0].product.product_type);
        let similarProduct = type.slice(0, 3)

        return(
            <div className="terpopuler">
                <h2 className="title-terpopuler">PRODUK SERUPA</h2>
                <div className="card-deck resize">
                    { similarProduct.map(product =>
                        <div className="card">
                             <img alt={product.product.name} width="100%" height="50%" src={product.pictures[0] ? product.pictures[0].photo.url : "https://res.cloudinary.com/monggovest/image/upload/v1547110490/icon/no_image_available.jpg"}/>
                            <div className="card-body">
                                <h5 className="card-title hewan1"><b>{ product.product.name }</b></h5>
                                <p className="card-text">{product.subdistrict.name},{product.regional.name}</p>
                        <p className="card-text"> {product.province.name}</p>
                        <p className="card-text harga1"><b><Currency quantity={product.price} group={'.'} decimal={','} currency={'IDR'} /></b></p>
                                <p className="card-text"> <Link to={`/detail-invest/${product.product_invest_detail.id}`}><button onClick={this.reload} type="button" className="btn btn-card-detail">Detail</button></Link></p>
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
