import { useState } from "react";


function Profile () {

  const [productFormState, setProductFormState] = useState({
    product_name: "",
    description: "",
    price: "",
    category_id: "",
    username: "",
  })

  const handleProductChange = (event) => {
    const { name, value } = event.target;
    setProductFormState({
      ...productFormState,
      [name]: value,
    });
  };

  const handleProductFormSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productFormState),
      });

      if (response.ok) {
        // Redirect to the homepage upon successful login
        navigate('/');

      } else {
        console.log("Login failed.");
      }  

    } catch (e) {
      console.error(e);
    }
  };




return (
<div className="profile-section">
  <h1>Welcome, !</h1>


  <div className="profile-section-block">
    <h3>All products currently available</h3>
    <div className="card-container">

      <div className="card" value="">

        <h3 className="product-name"></h3>
        <p className="product-description"></p>
        <p className="product-price">$ </p>
        <p className="product-category"></p>
        <img src="" />
      </div>

    </div>
  </div>

  <div className="profile-section-block">
    <h3>Current User Products:</h3>
    <div className="card-container">

      <div className="card" value="">
      <h3 className="product-name"></h3>
      <p className="product-description"></p>
      <p className="product-price">$  </p>
      <p className="product-category"></p>
      <img src="" />
    </div>

    </div>
  </div>

  <div className="create-new-product">
    <h3>Create a New Product:</h3>
    <form id="new-product">
      <div className="form-section">
        <label htmlFor="product-name">Product name:</label>
        <input type="text" 
        id="product-name" 
        name="product_name" />
        value={productFormState.product_name}
        onChange={handleProductChange}
      </div>
      <div className="form-section">
        <label htmlFor="product-description">Product Description</label>
        <textarea className="form-input" 
        id="product-description" 
        name="description">
        value={productFormState.description}
        onChange={handleProductChange}
        </textarea>
      </div>
      <div className="form-section">
        <label htmlFor="price">Price</label>
        <input className="form-input" id="price" name="price"></input>
      </div>
      <div className="form-section">
        <label htmlFor="product-category">Category</label>
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
      <div className="form-section">
        <button className="product-create-btn">List a new product</button>
      </div>
    </form>
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