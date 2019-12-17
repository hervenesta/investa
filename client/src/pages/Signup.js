import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import './signup.css';

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
      <div class=" text-center justify-content-center my-4  "   >
          <div class="form-group">
            <label class="mr-sm-2 h2" for="uname"> Username </label><br/>
            <input type="text" class="form-controll" name="username" id="uname" placeholder="John Smith" onChange={this.handleInputChange}></input>
          </div>
       <br/>
          <div class="form-group ">
            <label class="mr-sm-2 h2" for="psw"> Password </label> <br/>
            <input type="text" class="form-controll" name="password" id="psw" placeholder="****************" onChange={this.handleInputChange}></input>
          </div>
          <div class="form-group ">
            <label class="mr-sm-2 h2" for="psw"> Re-enter Password </label> <br/>
            <input type="text" class="form-controll" name="password" id="psw" placeholder="****************" onChange={this.handleInputChange}></input>
          </div>
         
       <button type="submit" class="btn btn-light btn-outline-light" >Sign Me Up</button>
       <NavLink className="nav-link active" to="login">Login</NavLink>
      </div>
     </form>
     </div>
    </div>

     
    )
  }
}

export default Signup;