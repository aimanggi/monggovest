import React, { Component } from 'react';
import {
  Redirect,
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/navbar-footer/Footer';
import Auth from './components/page/auth/Auth';
import ChangePass from './components/page/auth/ChangePass';
import Navbar from './components/navbar-footer/Navbar';
import Product from './components/page/product-invest/ProductInvest';
import './assets/scss/main.scss';
import NotFound from './components/page/landing-page/NotFound';
import LandingPage from './components/page/landing-page/LandingPage';
import Payment from './components/page/Payment/payment';
import DetailInvestasi from './components/page/detail-invest/DetailInvest';
import FormApp from './components/page/formdatadiri/App.js';
import PaymentSuccess from './components/page/Payment/PaymentSuccess';
import TentangKami from './components/page/TentangKami/tentangkami.js';
import Bantuan from './components/page/bantuan/bantuan.js';

const DefaultRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render = {props => (
      <div>  
        <Navbar/>
        <Component {...props}/>
        <Footer />
      </div>
    )} />
  )
}
const CrazyRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render={props => (
      <div>  
        <Component {...props}/>
      </div>
    )} />
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      email: '',
      isLoggedIn: false,
                
    }; 
}

// Get token in local storage to identify user session
getToken() {
    return localStorage.getItem('id')
}

// Get user current info
componentDidMount() {
    // This function running when user token in local storage exist
    if(this.getToken()){
        let url = 'https://staging-monggovest.herokuapp.com/api/v1/users/current'
        const headers = {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.getToken()  // Using authentication bearer to identify which user is logged in
            }
    
        return fetch(url, {
            headers
        })

        // Validating user session
        .then((response) => {
            if(response.ok){
            return response.json();    
            }
            else{
                throw response;
            }
            
        })
        .catch(err =>{
            this.setState({ 
                isLoggedIn:false
             })            
            })

      // Store user info in state
       .then((responseJson) => {
            this.setState({ 
                id: responseJson.id,
                name: responseJson.name,
                email: responseJson.email,
             }) 
             this.setState({
                isLoggedIn: true
             })   
        });
    }
    
    }

  render() {
    // Route for page that need user to log in
    const ProtectedRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={(props) => 
            localStorage.getItem('id') ?  // Identify with id in Local Storage
            <div>  
            <Navbar/>
            <Component {...props}/>
            <Footer />
            </div>
          :  <Redirect to="/" />
          }
        />
      );
    };
 
    return (
      <BrowserRouter>
        <Switch>
          {/* Everyone can access this page */}
          <DefaultRoute exact path="/"  component={LandingPage}/>
          <DefaultRoute path="/product-invest" component={() => <Product userId={this.state.id} userName={this.state.name} userEmail={this.state.email}/>}/>
          <DefaultRoute path="/detail-invest/:id" component={DetailInvestasi}/>
          <DefaultRoute path="/tentangkami" component={TentangKami}/>
          <DefaultRoute path="/bantuan" component={Bantuan}/>
          
          {/* User must log in to access this page */}
           <ProtectedRoute path="/payment" component={() => <Payment userId={this.state.id} userName={this.state.name} userEmail={this.state.email}/>}/>
           <ProtectedRoute path="/user-investor" component={() => <FormApp userId={this.state.id} userName={this.state.name} userEmail={this.state.email}/>}/>/>
           <ProtectedRoute path="/success" component={() => <PaymentSuccess userId={this.state.id} userName={this.state.name} userEmail={this.state.email}/>}/>/>

          {/* Page without navbar and footer */}
          <CrazyRoute path="/login" component={Auth}/>
          <CrazyRoute path="/password/reset=:token" component={ChangePass}/>
          <CrazyRoute component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
