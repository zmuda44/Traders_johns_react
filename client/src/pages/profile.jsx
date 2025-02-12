import { useState, useEffect } from "react";
import UserProfile from '../components/User-profile'

function Profile () {

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
  <div>You are currently not logged in. <a href="/login"> Click here to login.</a></div>

) : (
  <UserProfile 
  user={userState.userName}
  />
)  
}
</>


  
)}

export default Profile

