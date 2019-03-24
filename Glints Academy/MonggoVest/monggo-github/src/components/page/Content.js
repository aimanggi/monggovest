import React, { Component } from 'react';
import {
    Route
} from "react-router-dom";
import LandingPage from "../page/landing-page/LandingPage";
import ProductInvest from "../page/product-invest/ProductInvest";

class Content extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/product-invest" component={ProductInvest} />
            </div>
        )
    }
}

export default Content;