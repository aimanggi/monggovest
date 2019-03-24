import React from 'react';
import axios from 'axios';
import Currency from 'react-currency-formatter';
import {
  Link
} from "react-router-dom";

export default class CardboardProduct extends React.Component {

  // State Product Detail Investasi
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentPage: 1,
      productPerPage: 9,
      query:"",
      noFilter: false,
      sort:false,
      priceUp:false,
      priceDown: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  // API from backend
  componentDidMount() {
    axios.get(`https://staging-monggovest.herokuapp.com/api/v1/prodinvests`)
      .then(res => {
        const products = res.data.results;
        this.setState({
            products : products});
      })
  }

  handleSearch(text){
    this.setState({ 
      query:text.target.value
     })
 }

 handleSearchSubmit(){
  this.setState({ 
    sort:true
   })
}

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
    window.scrollTo(0,0)
  };

  scrollTop(){
    return window.scrollTo(0,0)
  }

  render() {
    
    const { products, currentPage, productPerPage } = this.state

    // displaying 12 product per page
    const lastPage = currentPage * productPerPage
    const firstPage = lastPage - productPerPage
    const currentProduct = products.slice(firstPage, lastPage)
    
    // Setting for next and previous page
    let prev  = currentPage > 0 ? (currentPage -1) : 0
    let last = Math.ceil(products.length/productPerPage)
    let next  = (last === currentPage) ? currentPage : currentPage + 1

    // Looping page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productPerPage); i++) {
      pageNumbers.push(i);
    }

    // Rendering page number
    const renderPageNumbers = pageNumbers.map(number => {
        return (
          <ul className='halaman nomor' key={number} id={number} onClick={this.handleClick}>
            {number}
          </ul>
        );
      });

        // Sort with price from low to high
        let lowToHigh = products.sort((a, b) => a.price - b.price); 
        const priceUp = lowToHigh.slice(firstPage, lastPage)

        // Sort with price from high to low
        let highToLow = products.sort((a, b) => b.price - a.price); 
        const priceDown = highToLow.slice(firstPage, lastPage)

        // Sort by product type
        const similarProduct = products.filter( product => product.product.product_type === 'Sapi' );
        console.log(similarProduct);

        // Search function
        let search = this.state.query
        let searchProduct = this.state.products.filter(product => product.product.name.toLowerCase().includes(search.toLowerCase()));

    return (
    <div>
          <h2 className="title-terpopuler product">Investasi</h2>  
          <div className="mfsbwrapbox">
          <p className="mfsbpar">Pencarian</p>
            <div className="mfsbsearch-bar">
              <input className="mfsbsearch" type="text" placeholder="Search" onChange={(text) => { this.handleSearch(text) }} />
              <button onClick={this.handleSearchSubmit} className="mfsbbutton"><span className="mfsbico-mglass" />
                <div className="mfsbsearch-icon"> </div>
              </button>
            </div>
            <div>
            </div></div>

            <div className="card-deck text-center resize">
            {  (this.state.noFilter ? currentProduct : this.state.sort ? searchProduct : this.state.priceUp ? priceUp : this.state.priceDown ? priceDown : currentProduct).map(product => 
            <div className='col-sm-4'>
                <div key={product.id} className="card"> 
                    {/* Start get API from here */}
                    <img alt={product.product.name} width="100%" height="50%" src={product.pictures[0] ? product.pictures[0].photo.url : "https://res.cloudinary.com/monggovest/image/upload/v1547110490/icon/no_image_available.jpg"}/>
                        <div className="card-body">
                        <h5 className="card-title hewan1"><b>{product.product.name}</b></h5>
                        <p className="card-text">{product.subdistrict.name},{product.regional.name}</p>
                        <p className="card-text"> {product.province.name}</p>
                        <p className="card-text harga1"><b><Currency quantity={product.price} group={'.'} decimal={','} currency={'IDR'} /></b></p>
                        <Link to={`/detail-invest/${product.product_invest_detail ? product.product_invest_detail.id : ""}`}><p><button className="btn btn-card-detail" onClick={this.scrollTop}>Details</button></p></Link>
                        </div>
                    {/* End API from here */}
                    </div>
                </div>
                    )}
                </div>
                <div className='halaman d-flex justify-content-center' style={{paddingBottom: "20px"}}>
                    {prev === 0 ? <button disabled>&laquo;</button> : <button id={prev} onClick={this.handleClick}>&laquo;</button>}
                    <ul className="page-numbers">{renderPageNumbers}</ul>
                    {next === currentPage ? <button disabled>&raquo;</button> : <button id={next} onClick={this.handleClick}>&raquo;</button>}
                </div>
    </div>
    )
  }
}
