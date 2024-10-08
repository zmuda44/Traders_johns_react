import { useState } from "react";


function Login () {

  const [userSignupFormState, setSignupFormState] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [userLoginFormState, setLoginFormState] = useState({
    username: "",
    // email: "",
    password: "",
  })

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupFormState({
      ...userSignupFormState,
      [name]: value,
    });
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginFormState({
      ...userLoginFormState,
      [name]: value,
    });
  };

  const handleSignupFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userSignupFormState),
      });

      // if (response.ok) {
      //   setFormSubmitted(true);
      //   setFormState({
      //     description: "",
      //     completionTimeMonths: "",
      //     completionTimeDays: "",
      //     startDate: "",
      //     endDate: "",
      //     manHours: "",
      //     customerName: "",
      //     customerEmail: "",
      //     customerPhone: ""
      //   });
      // }
   
    //  window.location.reload();
    console.log(response)
    } catch (e) {
      console.error(e);
    }
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userLoginFormState),
      });
      console.log(response)
    } catch (e) {
      console.error(e);
    }
  };

return (

<div className="login-signup-section">

<div className="login">
  <h2>Login</h2>
  <form id="login-form" className="form" onSubmit={handleLoginFormSubmit}>
    <div className="form-section">
      <label htmlFor="user-name">user name</label>
      <input type="text" 
      id="login-user-name"
      name="username"
      onChange={handleLoginChange} />
    </div>
    <div className="form-section">
      <label htmlFor="password">password</label>
      <input type="password" 
      id="login-password" 
      name="password"
      onChange={handleLoginChange}
       />
  </div>
  <button id="login-btn">Login</button>  
</form>
</div>

<div className="signup">
<h2>Sign up</h2>
<form id="signup-form" className="form" onSubmit={handleSignupFormSubmit}>
  <div className="form-section">
    <label htmlFor="signup-user-name">user name</label>
    <input 
    type="text" 
    id="signup-user-name" 
    name="username" 
    value={userSignupFormState.username} 
    onChange={handleSignupChange} 
    />     
  </div>
  <div className="form-section">
     <label htmlFor="signup-email">email</label>
     <input 
     type="email" 
     id="signup-email" 
     name="email" 
     value={userSignupFormState.email}
      onChange={handleSignupChange}
     />
  </div>
  <div className="form-section">
    <label htmlFor="signup-password">password</label>
    <input 
    type="password" 
    id="signup-password" 
    name="password"
    value={userSignupFormState.password}
    onChange={handleSignupChange}
     />
  </div>
  <button id="signup-btn">Signup</button>
</form>
</div>
</div>


)
}

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
