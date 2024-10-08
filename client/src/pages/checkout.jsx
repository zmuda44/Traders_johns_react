function Checkout () {




return (

<div className="checkout-container">
  
  <div className="item-section">
    <div className="card">
      <p className="seller"></p>
      <p className="seller">Item sold by Traders Johns'</p>      
      <h3 className="product-name"></h3>     
      <p className="product-description"></p>
        
      <p className="product-price">$ </p>     
      <p className="product-category"></p>  
    </div>  
  </div>

  <div className="checkout-section">
    <div className="credit-card-info">
      <label for="cc-name">Credit card name</label>
      <input type="text" id="cc-name" />

      <label for="cc-name">Credit card number</label>
      <input type="text" id="cc-number" />

      <label for="cc-name">Credit card billing</label>
      <input type="text" id="cc-billing" />

      <button id="credit-card-btn">Buy now</button>
    </div>
  </div>
</div>



)
}

export default Checkout







{/* <script src="/js/checkout.js"></script> */}







