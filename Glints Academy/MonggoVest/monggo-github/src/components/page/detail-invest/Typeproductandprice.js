import React from 'react';
import Currency from 'react-currency-formatter';

export default class Typeproductandprice extends React.Component {

  // State Product Detail Investasi
  state = {
    details: this.props.details
  }

  render() {
    return (

  <div>
      <div><br/><br/>
          { this.props.details.map(detail => 
              <div>
                  {/* Start get API from here */}
                  <p className="jenishewan"><b>{detail.product.name}</b></p>
                  <p className="hargahewan"><b><Currency quantity={detail.product_invest.price} group={'.'} decimal={','} currency={'IDR'} /></b></p>
                  {/* End API from here */}
                  
              </div>
          )}
      </div>
  </div>
    )
  }
}