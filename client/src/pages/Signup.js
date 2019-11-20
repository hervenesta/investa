import React from 'react';

function Signup(){
    return(
        /*<form className="container">
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
        <button type="submit"> Sign Me Up! </button>
      </form> */

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
       
    )
}

export default Signup;