import { useState } from "react";
import PopularItems from '../components/Popular-items.jsx'
import WatchedItems from '../components/Watched-items.jsx'
import UserItems from '../components/User-items.jsx'
import CreateProduct from '../components/Create-product.jsx'

function Profile () {
  


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
)}

export default Profile


{/* <div className="profile-section">
  <h1>Welcome, {{username}}!</h1>

  {{!-- All products currently available --}}
  <div class="profile-section-block">
    <h3>All products currently available</h3>
    <div class="card-container">
      {{#each products as |product|}}
      <div class="card" value="{{id}}">

        <h3 class="product-name">{{product_name}}</h3>
        <p class="product-description">{{description}}</p>
        <p class="product-price">$ {{price}} </p>
        <p class="product-category">{{category.category_name}}</p>
        <img src="/images/{{category.category_name}}.jpg">
      </div>
      {{/each}}
    </div>
  </div>

  {{!-- User listed products currently available --}}
  <div class="profile-section-block">
    <h3>Current User Products:</h3>
    <div class="card-container">
      {{#each userProducts as |userProduct|}}
      <div class="card" value="{{id}}">
      <h3 class="product-name">{{userProduct.product_name}}</h3>
      <p class="product-description">{{userProduct.description}}</p>
      <p class="product-price">$ {{userProduct.price}} </p>
      <p class="product-category">{{userProduct.category.category_name}}</p>
      <img src="/images/{{userProduct.category.category_name}}.jpg">
      </div>
      {{/each}}
    </div>
  </div>

  <div class="create-new-product">
    <h3>Create a New Product:</h3>
    <form id="new-product">
      <div class="form-section">
        <label for="product-name">Product name:</label>
        <input type="text" id="product-name" name="product-name" />
      </div>
      <div class="form-section">
        <label for="product-description">Product Description</label>
        <textarea class="form-input" id="product-description" name="product-description"></textarea>
      </div>
      <div class="form-section">
        <label for="price">Price</label>
        <input class="form-input" id="price" name="price"></input>
      </div>
      <div class="form-section">
        <label for="product-category">Category</label>
        <select id="product-category" name="product-category">
          <option value="1">Produce</option>
          <option value="2">Meat</option>
          <option value="3">Seafood</option>
          <option value="4">Dairy</option>
          <option value="5">Snacks</option>
          <option value="6">Dry-Goods</option>
          <option value="7">Canned-Goods</option>
          <option value="8">Condiments</option>
          <option value="9">Bakery</option>
          <option value="10">Cereal</option>
          <option value="11">Frozen-Goods</option>
        </select>
      </div>
      <div class="form-section">
        <button class="product-create-btn">List a new product</button>
      </div>
    </form>
  </div>
</div>



<script src="./js/profile.js"></script> */}