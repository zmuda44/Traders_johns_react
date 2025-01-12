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

