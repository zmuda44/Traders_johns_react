import { useState, useEffect } from "react";
import ProductCard from './Product-Card'

function WatchedItems () {

const [productsDisplayState, setProductsDisplayState] = useState([])





useEffect(() => {
  const getProductsData = async () => {
      try {
      const response = await fetch(`/api/users/products/watched`, {
        headers: {
          'Content-Type': 'application/json',
        }          
      })

      if (!response.ok) {
        throw new Error('something went wrong!');
      }     

      const productsData = await response.json()
     
      setProductsDisplayState(productsData.user_watched_products)

    } catch (err) {
      console.error(err);
    }
  };
      getProductsData();
  }, []);  

return (

<div id="watched-items" className="product-section">
  <h3>Watched Items</h3>
  {productsDisplayState.length == 0 && <p>You current have no watched items</p>}
  {productsDisplayState.length != 0 && <div className="card-container">
    {productsDisplayState.map((product) => (
      <ProductCard
        key={`w${product.id}`} 
        product={product}
            
    />
    ))}
  </div>}
</div>
  
)
}

export default WatchedItems



{/* <div className="card-container">
{productsDisplayState.map((product) => (
  <div key={product.id} className="card" value="">
    <h3 className="product-name">{product.product_name}</h3>
    <p className="product-description">{product.description}</p>
    <p className="product-price">$ {product.price} </p>
    <img src={`./public/images/${product.category.category_name}.jpg`} />
  </div>
))}
</div> */}