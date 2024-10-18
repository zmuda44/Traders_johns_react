import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import LoginForms from '../components/Login-forms'


function Login () {
  const [userState, setUserState] = useState({ userName: "" })

  useEffect(() => {
    // Need this to know if you are signed out or not
    const getUserData = async () => {
        try {
        const response = await fetch(`/api/users/me`, {
          headers: {
            'Content-Type': 'application/json',
          }          
        })
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }     
  
        const user = await response.json()

        console.log(user)
       
        setUserState({
          userName: user.username || ""
        });
  
        
  
      } catch (err) {
        console.error(err);
      }
    };
  
        getUserData();
    }, []);

return (
<>
{!userState.userName ? (
  <LoginForms /> 
) : (
  <div>You are already logged in!.<a href="/profile"> Click here for your profile.</a></div>
)  
}


</>


  
)}
  

export default Login;



{/* 
<div class="login-signup-section">

  {{#if logged_in}}
  <div>logged in</div>
  {{else}}
  <div class="login">
    <h2>Login</h2>
    <form id="login-form" class="form">
      <div class="form-section">
        <label for="user-name">user name</label>
        <input type="text" id="login-user-name" name="login-user-name">
      </div>
      <div class="form-section">
        <label for="password">password</label>
        <input type="password" id="login-password" name="password">
    </div>
    <button id="login-btn">Login</button>  
  </form>
</div>
<br>
<div class="signup">
  <h2>Sign up</h2>
  <form id="login-form" class="form">
    <div class="form-section">
      <label for="signup-user-name">user name</label>
      <input type="text" id="signup-user-name" name="user-name">      
    </div>
    <div class="form-section">
       <label for="signup-email">email</label>
       <input type="email" id="signup-email" name="email">
    </div>
    <div class="form-section">
      <label for="signup-password">password</label>
      <input type="password" id="signup-password" name="password">
    </div>
    <button id="signup-btn">Signup</button>
  </form>
  </div>
</div>
{{/if}}

<script src="./js/login.js"></script> */}
