import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

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
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '50%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="username"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '50%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="password"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="re-enter password"
                placeholder="re-enter password"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </form>
          <div>
            <NavLink className="nav-link active" to="login">Login</NavLink>
          </div>
        </div>
      </div>
/*
      <form className="border border-warning ">
        <h1 className=" text-center my-2">New User? Sign up right here!</h1>
      <div class="form-group  text-center justify-content-center my-4 border border-warning "   >
          <div class="form-group ">
            <label class="mr-sm-2 " for="uname"> Username </label><br/>
            <input type="text" class="form-controll" id="uname" aria-describedly="emailHelp" placeholder="Enter Username"></input>
          </div>
       <br/>
          <div class="form-group ">
            <label class="mr-sm-2" for="psw"> Password </label> <br/>
            <input type="text" class="form-controll" id="psw" placeholder="Password"></input>
          </div>
          <div class="form-group ">
            <label class="mr-sm-2" for="psw"> Re-enter Password </label> <br/>
            <input type="text" class="form-controll" id="psw" placeholder="Password"></input>
          </div>
          <div class="my-2" >
            <input type="checkbox" class="form-check-input " id="Check1"></input>
            <label class="form-check-label " for="Check1">Check me out</label> <br/>
          </div>
         
       <button type="submit" class="btn btn-light btn-outline-info" >Sign Me Up!</button>
      </div>
     </form>
       */
    )
  }
}

export default Signup;