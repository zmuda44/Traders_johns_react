function Login () {




return (

<div class="login-signup-section">


<div>logged in</div>

<div class="login">
  <h2>Login</h2>
  <form id="login-form" class="form">
    <div class="form-section">
      <label for="user-name">user name</label>
      <input type="text" id="login-user-name" name="login-user-name" />
    </div>
    <div class="form-section">
      <label for="password">password</label>
      <input type="password" id="login-password" name="password" />
  </div>
  <button id="login-btn">Login</button>  
</form>
</div>

<div class="signup">
<h2>Sign up</h2>
<form id="login-form" class="form">
  <div class="form-section">
    <label for="signup-user-name">user name</label>
    <input type="text" id="signup-user-name" name="user-name" />      
  </div>
  <div class="form-section">
     <label for="signup-email">email</label>
     <input type="email" id="signup-email" name="email" />
  </div>
  <div class="form-section">
    <label for="signup-password">password</label>
    <input type="password" id="signup-password" name="password" />
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
