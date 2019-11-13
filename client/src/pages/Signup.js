import React from 'react';

function Signup(){
    return(
        <form className="container">
            <h1>New User? Sign up right here!</h1>
        <label for="uname"><b>Username: </b></label>
        <input type="text" placeholder="Enter Username" name="username" required/>
        <br />
        <label for="psw"><b>Password: </b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
        <br />
        <label for="psw"><b>Reenter Password: </b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
        <br />
        <button type="submit"> Signup! </button>
      </form>
       
    )
}

export default Signup;