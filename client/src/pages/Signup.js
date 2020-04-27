import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import fire from '../config/fire';

import './signup.css';
// import Customers from '../components/Customers';

class Signup extends Component {

  state = {
    email:"",
    password:""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    const credentials = {
      email,
      password
    };
    fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("Successfully Signed in");
            // console.log({email:email,password:password});
            axios
              .post('http://localhost:8080/registration', credentials)
              .then(() => console.log('credentials Created'))
              .catch(err => {
                console.error(err);
            }); 
        })
        .catch((err) => {
            console.log("Error:" + err.toString());
    })   
  };

  render(){
    return(
      <div id="outerContainer" className=" d-flex justify-content-center my-2 ">
        <div id="InnerContainer" className="w-50">
      <h5 id="SignUpHeader" >New User? Sign up right here!</h5>
      <form className=" d-flex justify-content-center " onSubmit={this.handleSubmit}>
      <div className=" text-center justify-content-center my-4  "   >
          <div className="form-group">
            <label className="mr-sm-2 h2"> Email </label><br/>
            <input type="text" className="form-controll" name="email" placeholder="email" onChange={this.handleInputChange} />
          </div>
       <br/>
          <div className="form-group ">
            <label className="mr-sm-2 h2"> Password </label> <br/>
            <input type="text" className="form-controll" name="password" placeholder="password" onChange={this.handleInputChange} />
          </div>
          {/* <div className="form-group ">
            <label className="mr-sm-2 h2" for="psw"> Re-enter Password </label> <br/>
            <input type="text" className="form-controll" name="password" id="psw" placeholder="****************" onChange={this.handleInputChange} />
          </div> */}
         
       <button type="submit" className="btn btn-light btn-outline-light">Sign Me Up</button>
       <NavLink className="nav-link active" to="login">Login</NavLink>
      </div>
     </form>
     </div>
     {/* <Customers /> */}
    </div>

     
    )
  }
}

export default Signup;