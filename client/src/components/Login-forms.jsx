import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function LoginForms () {
  const navigate = useNavigate()

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

  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");

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

      if (response.ok) {
        // Redirect to the homepage upon successful login
        // doesn't work in Render
        // document.location.replace('/profile');
        navigate('/profile')


      } else {
        console.log("Login failed.");
        setSignupError("An error occurred during signup.");
        
      }  

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

      if (response.ok) {
        // Redirect to the homepage upon successful login
        // document.location.replace('/profile');
        navigate('/profile')
      } else {
        console.log("Login failed.");  
        setLoginError("An error occurred during login."); 
        setLoginFormState({ username: "", password: "" });     
      }

    } catch (e) {
      console.error(e);
      
    }
  };

return (

<div className="login-signup-section">

<div className="login">
  <h2>Login</h2>
  {loginError && <div className="error-message">{loginError}</div>}
  <form id="login-form" className="form" onSubmit={handleLoginFormSubmit}>
    <div className="form-section">
      <label htmlFor="user-name">user name</label>
      <input type="text" 
      id="login-user-name"
      name="username"
      value={userLoginFormState.username}
      onChange={handleLoginChange} />
    </div>
    <div className="form-section">
      <label htmlFor="password">password</label>
      <input type="password" 
      id="login-password" 
      name="password"
      value={userLoginFormState.password}
      onChange={handleLoginChange}
       />
  </div>
  <button id="login-btn">Login</button>  
</form>
</div>

<div className="signup">
<h2>Sign up</h2>
{signupError && <div className="error-message">{signupError}</div>}
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

export default LoginForms
