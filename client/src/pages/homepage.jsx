import { useState, useEffect } from "react";
import WatchedItems from '../components/Watched-items'
import CategoryItems from '../components/Category-items'

function Homepage () {

const [productsDisplayState, setProductsDisplayState] = useState([])
//   productName: "",
//   description: "",
//   price: "",
//   category_id: "",
//   user_id: ""
// })

useEffect(() => {
  const getProductsData = async () => {
      try {
      const response = await fetch(`/api/products`, {
        headers: {
          'Content-Type': 'application/json',
        }          
      })

      if (!response.ok) {
        throw new Error('something went wrong!');
      }     

      const productsData = await response.json()
     
      setProductsDisplayState(productsData)

    } catch (err) {
      console.error(err);
    }
  };

      getProductsData();
  }, []);



return (
<div className="homepage-main">


<aside className="categories">
  <h2>Categories</h2>
  <button className="category-names" value="1" onClick={handleCategoryClick}>
  Produce
  </button>
  <button className="category-names" value="2">
    Meat
  </button>
  <button className="category-names" value="3">
    Seafood
  </button>
  <button className="category-names" value="4">
    Dairy
  </button>
  <button className="category-names" value="5">
    Snacks
  </button>
  <button className="category-names" value="6">
    Dry-Goods
  </button>
  <button className="category-names" value="7">
    Canned-Goods
  </button>
  <button className="category-names" value="8">
    Condiments
  </button>
  <button className="category-names" value="9">
    Bakery
  </button>
  <button className="category-names" value="10">
    Cereal
  </button>
  <button className="category-names" value="11">
    Frozen-Goods
  </button>
</aside>



<div className="main-homepage-content">

  <WatchedItems />
  
  <CategoryItems />
>


  <div className="popular-items">
    <h3>Popular Items</h3>

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
