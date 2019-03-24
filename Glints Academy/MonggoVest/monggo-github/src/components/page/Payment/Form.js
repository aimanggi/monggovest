import React , { Component } from 'react';
import LihatBiru from '../../btn/LihatBiru';
import {
  Redirect
} from "react-router-dom";

class Form extends Component  {
  constructor(props){
		super(props);
	 this.state = {
    metodePembayaran: '',
		nomorKartu: "",
		namaKartu: "",
		masaBerlakuKartu: "",
    CVV: "",
    items: this.props.items || [],
    selectedItem: this.props.items[0] || this.props.selectedItem,
    showItems: false,
    submitted: false
	};
	}


	handleNomorKartu(text){
		this.setState({nomorKartu:text.target.value})
	  }

	handleNamaKartu(text){
		this.setState({namaKartu:text.target.value})
	  }

	handleMasaBerlaku(text){
		this.setState({masaBerlakuKartu:text.target.value})
	  }
	
	handleCVV(text){
		this.setState({CVV:text.target.value})
	  }
  
  getToken() {
      return localStorage.getItem('id')
  }

  getInvest() {
    return localStorage.getItem('invest')
}
    
    payment = (e) => {
		e.preventDefault();
		let obj = {}
		obj.nomorKartu = this.state.nomorKartu
		obj.namaKartu = this.state.namaKartu
		obj.masaBerlakuKartu = this.state.masaBerlakuKartu
    obj.CVV = this.state.CVV
    obj.metodePembayaran = this.state.metodePembayaran
    
    fetch('https://staging-monggovest.herokuapp.com/api/v1/paymentdetails', {
     method: 'POST',
     headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + this.getToken(),
             },
    body: JSON.stringify(
           {    
                "user_investor_id": this.getInvest(),
                "receipt": "",
                "card_number": obj.nomorKartu,
                "card_holder_name":obj.namaKartu,
              	"card_valid_date": obj.masaBerlakuKartu,
                "cvv": obj.CVV,
                "payment_method": this.state.selectedItem.id,
                "isPaid": false
             } 
    ),
})

.then((response) => response.json())
.then(() => {
        // Set investor id in local storage   
        localStorage.removeItem('invest');
        localStorage.removeItem('prod');
       
        this.setState({
           submitted:true
       })
    })
  };
  
  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      showItems: false,
    })
  }

  render() {
   // Redirect to payment success if this form submitted
   if (this.state.submitted) {
    return <Redirect to="/success" />}

    let tokenPayment = Math.floor(Math.random() * 1000000000)
    
    return (
        <div>
          <h1> Pilih Metode Pembayaran </h1>
          <form onSubmit={(e) => { this.payment(e);}}>
          <p>Metode Pembayaran</p>
          <div>
           <div>
              <div className="mfddp1wrapper">
              <div className="mfddp1select-box--box">
              <div className="mfddp1select-box--container">
              <div className="mfddp1select-box--selected-item">
              { this.state.selectedItem.value }
              </div>
              <div
              className="mfddp1select-box--arrow"
              onClick={this.dropDown}
              >
              <div className={`${this.state.showItems ? 'mfddp1select-box--arrow-up' : 'mfddp1select-box--arrow-down'}`}/></div> 
              </div>
              <div
              className="mfddp1select-box--items"
              style={{display: this.state.showItems ? 'block' : 'none'}}
              >
              {
                this.state.items.map(item => <div
                key={item.id}
                onClick={() => this.selectItem(item)}
                className={this.state.selectedItem === item ? 'selected' : ''}
                >
                { item.value }
                </div>)
              }
              </div>
              </div>
              <input type="hidden" name={this.state.name} value={this.state.selectedItem.id} />
              </div>
      </div>
    </div>
         <div  style={{display: this.state.selectedItem.id === 0 ? 'block' : 'none'}}> 
          <p>Nomor Kartu*</p>
          <input className="inputbox" 
          value={this.state.nomorKartu}
          name="nomorKartu" 
          placeholder="1111 2222 3333 4444" 
          onChange={(text) => { this.handleNomorKartu(text)}}/>
          
          <p>Nama Pada Kartu*</p>
          <input className="inputbox1" 
          value={this.state.namaKartu}
          name="namaKartu" 
          placeholder="Agus Mulyono" 
          onChange={(text) => { this.handleNamaKartu(text)}} />

                    <p>Masa Berlaku Kartu (MM/YY)*</p>
          <input className="inputbox2" 
          value={this.state.masaBerlakuKartu}
          name="masaBerlakuKartu" 
          placeholder="MM/YY" 
          onChange={(text) => { this.handleMasaBerlaku(text)}}/>

          <p className="samping">CVV*</p>
          <input className="inputbox3" 
          value={this.state.CVV}
          name="CVV" 
          placeholder="XXX"
          onChange={(text) => { this.handleCVV(text)}} 
          />
          <br />
          </div>
          <div style={{display: this.state.selectedItem.id === 1 ? 'block' : 'none'}}>
            <div>
              <p>Silahkan lakukan pembayaran ke rekening di bawah !</p>
              <p>Bank : Bank XXX</p>
              <p>Nama Pemilik Akun : PT. MonggoVest Indonesia</p>
              <p>Nomor Rekening  : 111 1111 1111</p>
            </div>
          </div>

           <div style={{display: this.state.selectedItem.id === 2 ? 'block' : 'none'}}>
              <p>Kode pembayaran anda : {tokenPayment}</p>
              <p>Sampaikan kepada kasir Indomaret untuk melakulan pembayaran dengan menunjukkan kode tersebut.</p>
          </div>

          <div style={{display: this.state.selectedItem.id === 3 ? 'block' : 'none'}}>
              <p>Kode pembayaran anda : {tokenPayment}</p>
              <p>Sampaikan kepada kasir Alfamert untuk melakulan pembayaran dengan menunjukkan kode tersebut.</p>
          </div>
      	<div className="lihat-biru">
      	<LihatBiru />
      	</div>
          </form>	
        </div>  

    );
  }
}
      

export default Form