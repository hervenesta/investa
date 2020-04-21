import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import './signup.css';
// import Customers from '../components/Customers';

class Signup extends Component {

  state = {
    username:"",
    password:""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    const credentials = {
      username,
      password
    };

      axios
        .post('http://localhost:8080/registration', credentials)
        .then(() => console.log('credentials Created'))
        .catch(err => {
          console.error(err);
      }); 
  };

  render(){
    return(
      <div id="outerContainer" className=" d-flex justify-content-center border border-primary my-2 ">
        <div id="InnerContainer" className=" border border-primary w-50">
      <h5 id="SignUpHeader" >New User? Sign up right here!</h5>
      <form className=" d-flex justify-content-center border border-primary " onSubmit={this.handleSubmit}>
      <div className=" text-center justify-content-center my-4  "   >
          <div className="form-group">
            <label className="mr-sm-2 h2" for="uname"> Username </label><br/>
            <input type="text" className="form-controll" name="username" id="uname" placeholder="John Smith" onChange={this.handleInputChange} />
          </div>
       <br/>
          <div className="form-group ">
            <label className="mr-sm-2 h2" for="psw"> Password </label> <br/>
            <input type="text" className="form-controll" name="password" id="psw" placeholder="****************" onChange={this.handleInputChange} />
          </div>
          <div className="form-group ">
            <label className="mr-sm-2 h2" for="psw"> Re-enter Password </label> <br/>
            <input type="text" className="form-controll" name="password" id="psw" placeholder="****************" onChange={this.handleInputChange} />
          </div>
         
       <button type="submit" className="btn btn-light btn-outline-light" >Sign Me Up</button>
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