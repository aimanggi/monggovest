import React , { Component } from 'react';
import '../../../assets/scss/components/page/formdatadiri/_formdatadiri.scss';
import Dropdown11 from'../../dropdown/dropdowngajiapp.js';
import Dropdown22 from '../../dropdown/dropdownidentitasapp.js';
import Dropdown33 from '../../dropdown/dropdownprovinsi1app.js';
import Dropdown44 from '../../dropdown/dropdownsumberpenghasilanapp.js';
import Appes from '../../calendar/calendar.js';
import '../../../assets/scss/components/button/_datadiributton.scss';
import LihatBirus from '../../btn/datadiributton.js';


class Filters extends Component {

  constructor(props) { 
    super(props);

    this.state = {    
        formData:'',
        newUser:'',
        useridCardNumber: '',  
        userAddres: '',
        userPhoneNumber: '',
        userBirthDate:'',  
        useridCardType:'',
        userincomeResource:'',
        userSalaryRange:''   
    }

    
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.handleInput = this.handleInput.bind(this);
    
      this.setField = this.setField.bind(this)
 
    }

  /* This lifecycle hook gets executed when the component mounts */
  
    setField(field, e) {
    this.setState({
      [field]: e.target.value
    })
}
  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : {...prevState.newUser, fullname: value}}), 
    () => console.log(this.state.newUser))
  }
 


  handleInput(e) {
       let value = e.target.value;
       let fullname = e.target.fullname;
   this.setState( prevState => ({ newUser : {...prevState.newUser, [fullname]: value}}), 
    () => console.log(this.state.newUser))
  }

  handleFormSubmit(e) {
    e.preventDefault();
     let obj = {}
        obj.userId = this.state.newUser;
        obj.useridCardNumber = this.state.useridCardNumber;
        obj.userAddres = this.state.userAddres;
        obj.userPhoneNumber = this.state.userPhoneNumber;
        obj.userBirthDate = this.state.userBirthDate;
        obj.useridCardType = this.state.useridCardType;
        obj.userincomeResource = this.state.userincomeResource;
        obj.userSalaryRange = this.state.userSalaryRange;

    fetch('https://staging-monggovest.herokuapp.com/api/v1/investordetail',{
        method: "POST",
        headers: {
                'Content-Type': 'application/json',
                 },
        body: JSON.stringify({        
          "user_investor_id":obj.userId ,
          "id_card_number":obj.useridCardNumber,
          "addres": obj.userAddres,
          "phone_number": obj.userPhoneNumber,
          "birth_date": obj.userBirthDate,
          "id_card_type": obj.useridCardType,
          "income_resource": obj.userincomeResource,
          "salary_range": obj.userSalaryRange,
          })
        }).then(response => {
          response.json().then(data =>{
            console.log("Successful" + data);
        })
    })
  }   


  render() {
    
    return (
<form className="mvformwrapper3" onSubmit={this.handleFormSubmit}>
  
             <h1 className="mv3row1"> Atau Lengkapi Data di Atas </h1>
             <h2 className="mv3row2">Informasi Pribadi</h2>
            <label className="mv3row3">
                  <p>Nama Lengkap*</p>
                  <input 
                   className="mv3inputbox"
                   inputType={'text'}
                   title= {'Full Name'} 
                   name= {'name'}
                   value={this.state.newUser.fullname} 
                   placeholder = {'Agus Mulyono'}                
                   /> {/* Full Name of user */}  
            </label>  
              <br/>
            <label className="mv3row4">
                   <p>No.Identitas*</p>
                   <input 
                   className="mv3inputbox"
                   inputType={'text'}
                   title= {'Full Name'} 
                   name= {'idno'}
                   value={this.state.newUser.age} 
                   placeholder = {'2171xxxxxxxx'}
                   onChange = {this.setField.bind(null, 'useridCardNumber')}
                   /> {/* Id card numer of user */}     
            </label>
              <br/>
            <label className="mv3row5">
                   <p>Alamat*</p>
                   <input 
                   className="mv3inputbox" 
                   inputType={'text'} 
                   title= {'Full Name'} 
                   name= {'idno'}
                   value={this.state.newUser.age} 
                   placeholder = {'Jl. perdamaian no.20'}
                   onChange = {this.setField.bind(null, 'userAddres')}
                   /> {/* Address user */}    
            </label>
            
             <label className="mv3row6">
                  <p>Tanggal Lahir</p>
                  <Appes onChange={this.setField.bind(null, 'userBirthDate')}/>
                  {/*Birthday of user*/}
            </label>  

            <label>
                  <Dropdown22 dropdownChange={this.setField.bind('useridCardType', null)}/>
                  {/* Id card type of user */}
                  <Dropdown33/>
                  {/* Province of user */}
                  <Dropdown44 onChange={this.setField.bind(null, 'userincomeResource')}/>
                  {/* Sumber pengghasilan */}
             </label>
            <br/>   

                    <h1 className="mv3row7">Informasi Kontak</h1>
            <label className="mv3row8">
                   <p>Telepon*</p>
                   <input 
                   className="mv3inputbox" 
                   inputType={'text'}
                   title= {'Full Name'} 
                   name= {'idno'}
                   value={this.state.newUser.age} 
                   placeholder = {'080010293'}
                   onChange = {this.setField.bind(null, 'userPhoneNumber')}
                   /> {/* Phone number user */}    
            </label> 
              <br/>
            <label className="mv3row9">       
                   <p>Email*</p>
                   <input 
                   className="mv3inputbox" 
                   inputType={'text'}
                   title= {'Full Name'} 
                   name= {'idno'}
                   value={this.state.newUser.age} 
                   placeholder = {'thisyouremail@email.com'}
                   handleChange = {this.handleAge}
                   /> {/* Email of user */}    
            </label>
            <h1 className="mv3row10">Informasi Penghasilan</h1>
            <label>
                  <Dropdown11 action={this.setField.bind(null, 'userSalaryRange')}/>
                  {/* Salary of user */}
            </label>

           
                 
            <LihatBirus   
                   type = {'primary'} 
                   title = {'Submit'} 
                   /> { /*Submit */ }     

                    
  </form>
    ); 
  } 

}
export default Filters


 