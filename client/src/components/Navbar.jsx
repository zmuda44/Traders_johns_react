import { useState, useEffect } from "react";



function Navbar () {

const [userState, setUserState] = useState({ userName: "" })

// const [productState, setProductState] = useState(

// )

useEffect(() => {
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
     
      setUserState({
        userName: user.username || ""
      });

      

    } catch (err) {
      console.error(err);
    }
  };

      getUserData();
  }, []);

 async function handleLogout () {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }


  }

return (
<header>
    <div className="container">
      <div className="branding-container">
        <a href="/"><h2>Welcome to Trader Johns'!</h2></a>
        <h3>the <span>e</span><span>b</span><span>a</span><span>y</span> of organic foods</h3>
      </div>

      <div className="header-link-container">

        {userState.userName ? (
        <>            
        <h4>Welcome, {userState.userName}</h4> 
        <a href="/profile" ><p id="profile-link">Profile</p></a>
        <p id="logout-btn" onClick={handleLogout}>Logout</p>
        </>
        ) : (
        <a href="/login" className="login-signup"><p>Login or Signup here <br />to begin buying and selling</p></a>
        )}

      </div>

      <div className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>


  </header>



)}

export default Navbar










// <header>
//     <div className="container title-container">
//       <div className="branding-container">
//         <a href="/"><h2>Welcome to Trader Johns'!</h2></a>
//         <h3>the <span>e</span><span>b</span><span>a</span><span>y</span> of organic foods</h3>
//       </div>

//       <div className="header-link-container">
//         {{#if logged_in}}
//         <h4>Welcome </h4>
//         <a href="/profile" className="homepage-link">Profile</a> 
//         <a class="logout-link">Logout</a>
//         {{else}}
//         <a href="/login" class="login-signup">Login or Signup here to begin buying and selling</a>
//         {{/if}}
//       </div>

//       <div class="hamburger-menu">
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </div>


//   </header>