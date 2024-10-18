import PopularItems from '../components/Popular-items.jsx'
import WatchedItems from '../components/Watched-items.jsx'
import UserItems from '../components/User-items.jsx'
import CreateProduct from '../components/Create-product.jsx'



function UserProfile () {

console.log("hit")
return (
<div className="profile-section">

  <h1>Welcome, !</h1>

  <div className="profile-section-block">
    <h3>Popular Items</h3>
    <PopularItems />
  </div>

  <div className="profile-section-block">
    <h3>Current User Products:</h3>
    <UserItems />
  </div>

  <div className="profile-section-block">
    <h3>Current Watched Products:</h3>
    <WatchedItems />
  </div>

  <div className="profile-section-block">
    <h3>Quick Create Product or <a href="/user/seller-dashboard">Visit Seller Dashboard</a></h3>
  </div>

  <div className="profile-section-block">
    <h3>User Dashboard</h3>
    <CreateProduct />
  </div>

  
</div>  
)
}

export default UserProfile;