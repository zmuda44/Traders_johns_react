import { useState, useEffect } from "react";

function Navbar() {
  const [userState, setUserState] = useState({ userName: "" });

  useEffect(() => {
    const getUserData = async () => {

      try {
        const response = await fetch(`/api/users/me`, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const user = await response.json();

        setUserState({
          userName: user.username || ""
        });

      } catch (err) {
        // You can log or handle the error, but we won't propagate it to the console anymore.
        console.error("Error fetching user data:", err);
        // Optionally, set userName to an empty string if the error occurs
        setUserState({ userName: "" });
      }
    };

    getUserData();
  }, []);

  async function handleLogout() {
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
              <a href="/profile"><p id="profile-link">Profile</p></a>
              <p id="logout-btn" onClick={handleLogout}>Logout</p>
            </>
          ) : (
            <a href="/login" className="login-signup">
              <p>Login or Signup here <br />to begin buying and selling</p>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
