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
)
}

export default Homepage














{/* 
<div class="homepage-main">


  <aside class="categories">
    <h2>Categories</h2>
    <button class="category-names" value="1">
    Produce
    </button>
    <button class="category-names" value="2">
      Meat
    </button>
    <button class="category-names" value="3">
      Seafood
    </button>
    <button class="category-names" value="4">
      Dairy
    </button>
    <button class="category-names" value="5">
      Snacks
    </button>
    <button class="category-names" value="6">
      Dry-Goods
    </button>
    <button class="category-names" value="7">
      Canned-Goods
    </button>
    <button class="category-names" value="8">
      Condiments
    </button>
    <button class="category-names" value="9">
      Bakery
    </button>
    <button class="category-names" value="10">
      Cereal
    </button>
    <button class="category-names" value="11">
      Frozen-Goods
    </button>
  </aside>


{{!-- Product cards of all products currently available --}}
{{!-- Button to convert dollars to euros --}}
  <div class="main-homepage-content">
    {{!-- <div class="convert">
      <p>Click to show price in euros</p>
      <a href="/euros"><button id="convert-currency">€</button></a>
    </div> --}}

    <div id="watched-items"></div>
    <h3>Currently Watched Items</h3>
      <div class="card-container">
        {{#each products as |product|}}
        <div class="card" value="{{id}}">
          <h3 class="product-name">{{product_name}}</h3>
          <p class="product-description">{{description}}</p>
          <p class="product-price">$ {{price}} </p>
          <p class="product-category">{{category.category_name}}</p>
          {{!-- Thsi will search for each image by name --}}
          <img src="/images/{{category.category_name}}.jpg">
        </div>
        {{/each}}


      </div>
    <div class="category-items">
      <h3>Chosen Category Items</h3>

    </div>
    <div class="popular-items">
      <h3>Popular Items</h3>

    </div>
  </div>

 <div>something</di>
  
</div>
<script src="/js/homepage.js"></script>



 */}
