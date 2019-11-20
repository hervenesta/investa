import React from 'react';

function Login(props){
    return(
      /*<div id = "JSXmustReturnDIV" >
        <form className="container" className="d-flex align-items-center">
        <h1>Login investa team</h1>
    <label for="uname"><b>Username</b></label>
    <input  type="text" placeholder="Enter Username" name="username" id ="uname" required/>
    <label for="psw"><span className = "padded"><b>Password</b></span></label>
    <input type="password" placeholder="Enter Password" name="pswrd" id="psw" required/>

    <button type="submit"> Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" />
    </label>
  </form>   
  </div> */
          
     <form className="border border-warning ">
      <div class="form-group  text-center justify-content-center my-4 border border-warning "   >
        
          <div class="form-group ">
            <label class="mr-sm-2 " for="uname"> Username </label>
            <input type="text" class="form-controll" id="uname" aria-describedly="emailHelp" placeholder="Enter Username"></input>
          </div>
       <br/>
          <div class="form-group ">
            <label class="mr-sm-2" for="psw"> Password </label>
            <input type="text" class="form-controll" id="psw" placeholder="Password"></input>
          </div>
          <div class="my-2" >
            <input type="checkbox" class="form-check-input " id="Check1"></input>
            <label class="form-check-label " for="Check1">Check me out</label> <br/>
          </div>
         
       <button type="submit" class="btn btn-dark px-2 ">Submit</button>
      </div>
     </form>

    )
}

export default Login;