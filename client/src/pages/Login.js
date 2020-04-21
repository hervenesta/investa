import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

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
        .post('http://localhost:8080/login', credentials)
        .then(() => console.log('credentials Created'))
        .catch(err => {
          console.error(err);
      }); 
  };

  render(){
    return(
      <div>
        <div className = " my-2">
            <form className="d-flex justify-content-center">
              <div className="form  text-center  my-4 " >
                <div >
                  <label className="mr-sm-2 h2" for="uname"> Username </label><br/>
                  <input type="text" className="form-controll" id="uname" placeholder="Enter Username"/>
                </div>
                <br/>
                <div >
                  <label className="mr-sm-2 h2" for="psw"> Password </label><br/>
                  <input type="text" className="form-controll" id="psw" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-dark px-2 ">Take Me In</button>
                <NavLink className="nav-link active" to="signup">Sign up</NavLink>
              </div>
            </form>
        </div>
      </div>
    )
  }
}

export default Login;