import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import fire from '../config/fire';
// import axios from 'axios';

class Login extends Component {

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

    // const credentials = {
    //   email,
    //   password
    // };
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
          console.log("Successfully Logged In");
      })
      .catch((err) => {
          console.log("Error:" + err.toString());
    })

      // axios
      //   .post('http://localhost:8080/login', credentials)
      //   .then(() => console.log('credentials Created'))
      //   .catch(err => {
      //     console.error(err);
      // }); 
  };

  render(){
    return(
      <div>
        <div className = " my-2">
            <form className="d-flex justify-content-center">
              <div className="form  text-center  my-4 " >
                <div >
                  <label className="mr-sm-2 h2"> Email </label><br/>
                  <input type="text" className="form-controll" name="email" placeholder="Enter email" onChange={this.handleChange}/>
                </div>
                <br/>
                <div >
                  <label className="mr-sm-2 h2" for="psw"> Password </label><br/>
                  <input type="text" className="form-controll" name="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-dark px-2 btn-pg">Take Me In</button>
                <NavLink className="nav-link active" to="signup">Sign up</NavLink>
              </div>
            </form>
        </div>
      </div>
    )
  }
}

export default Login;