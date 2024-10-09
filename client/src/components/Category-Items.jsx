import { useState, useEffect } from "react";

function CategoryItems () {

const [productsDisplayState, setProductsDisplayState] = useState([])


useEffect(() => {
  const getProductsData = async () => {
      try {
      const response = await fetch(`/api/products/category/1`, {
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

console.log(productsDisplayState)

return (

<div id="watched-items">

  <h3>Items in Category</h3>
  <div className="card-container">

    {productsDisplayState.map((product) => (

      <div key={product.id} className="card" value="">
        <h3 className="product-name">{product.product_name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">$ {product.price} </p>
        <img src="" />
      </div>
    ))}


  </div>

</div>
  
)
}

export default CategoryItems