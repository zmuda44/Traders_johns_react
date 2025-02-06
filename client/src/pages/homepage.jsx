import { useState, useEffect } from "react";
import WatchedItems from '../components/Watched-items'
import CategoryItems from '../components/Category-items'
import PopularItems from '../components/Popular-items'

function Homepage () {

const [userDisplayState, setUserDisplayState] = useState("")

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
      return
    }     

    const userData = await response.json()
    
    setUserDisplayState({ ...userData })
  

  } catch (err) {
    console.error(err);
  }
  };
    getUserData();
}, []);

const [categoryButtonState, setCategoryButtonState] = useState({value: 1})

const handleCategoryClick = (event) => {
  const categoryId = event.target.value;
  setCategoryButtonState({value: categoryId})  
};  

return (

<div className="homepage-main">
  <div className="container"> 
    <aside className="labels">
      <div className="popular-aside">   
      </div>
      <div className="categories-aside">
        <h2>Categories</h2>
        <button className="category-names" value="1" onClick={handleCategoryClick}>
        Produce
        </button>
        <button className="category-names" value="2" onClick={handleCategoryClick}>
          Meat
        </button>
        <button className="category-names" value="3" onClick={handleCategoryClick}>
          Seafood
        </button>
        <button className="category-names" value="4" onClick={handleCategoryClick}>
          Dairy
        </button>
        <button className="category-names" value="5" onClick={handleCategoryClick}>
          Snacks
        </button>
        <button className="category-names" value="6" onClick={handleCategoryClick}>
          Dry-Goods
        </button>
        <button className="category-names" value="7" onClick={handleCategoryClick}>
          Canned-Goods
        </button>
        <button className="category-names" value="8" onClick={handleCategoryClick}>
          Condiments
        </button>
        <button className="category-names" value="9" onClick={handleCategoryClick}>
          Bakery
        </button>
        <button className="category-names" value="10" onClick={handleCategoryClick}>
          Cereal          
        </button>
        <button className="category-names" value="11" onClick={handleCategoryClick}>
          Frozen-Goods
        </button>
      </div>        
    </aside> 

    <div className="homepage-products">
      {!userDisplayState &&  (
      <div className="homepage-signout">
        <h3>You are signed out</h3>
        <h3>Signup or Login to begin buying and selling</h3>
      </div>
      )}
      {userDisplayState && 
        <WatchedItems 
          loggedIn = {true}
          username={userDisplayState ? userDisplayState.username : ""}
        />
      }      
      <PopularItems 
        username={userDisplayState ? userDisplayState.username : ""}
      />
      <CategoryItems 
        categoryId={categoryButtonState.value}
        chosen={true}
        username={userDisplayState ? userDisplayState.username : ""}
      />
      <CategoryItems categoryId = {1} />
      <CategoryItems categoryId = {2} />
      <CategoryItems categoryId = {3} />
      <CategoryItems categoryId = {4} />
      <CategoryItems categoryId = {5} />
      <CategoryItems categoryId = {6} />
    </div>
  </div>
</div>
  );
}

export default Homepage


