import React from 'react';

function Login(props){
    return(
    <form className="container">
        <h1>Login investa team</h1>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required/>
        <br />
    <label for="psw"><span className = "padded"><b>Password</b></span></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        <br />

    <button type="submit"> Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" />
    </label>
  </form>
    )
}

export default Login;