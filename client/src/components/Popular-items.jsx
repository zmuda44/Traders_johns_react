import { useState, useEffect } from "react";


function PopularItems () {

  const [productsDisplayState, setProductsDisplayState] = useState([])  
  
  useEffect(() => {
    const getProductsData = async () => {
        try {
        const response = await fetch(`/api/products/popular`, {
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
  
  <div id="watched-items">
  
    <h3>Popular Items</h3>
    <div className="card-container">
  
      {productsDisplayState.map((watchedProduct) => (
  
        <div key={watchedProduct.product_id} className="card" value="">
          <h3 className="product-name">{watchedProduct.product.product_name}</h3>
          <p className="product-description">{watchedProduct.product.description}</p>
          <p className="product-price">$ {watchedProduct.product.price} </p>
          <img src={`./public/images/${watchedProduct.product.category.category_name}.jpg`} />
        </div>
      ))}
  
  
    </div>
  
  </div>

    )
}

export default PopularItems