

function Homepage () {


return (
<div className="homepage-main">


<aside className="categories">
  <h2>Categories</h2>
  <button className="category-names" value="1">
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


  <div id="watched-items"></div>
  <h3>Currently Watched Items</h3>
    <div className="card-container">

      <div className="card" value="">
        <h3 className="product-name"></h3>
        <p className="product-description"></p>
        <p className="product-price">$  </p>
        <p className="product-category"></p>

        <img src="" />
      </div>



    </div>
  <div className="category-items">
    <h3>Chosen Category Items</h3>

  </div>
  <div className="popular-items">
    <h3>Popular Items</h3>

  </div>
</div>

<div>something</div>

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
