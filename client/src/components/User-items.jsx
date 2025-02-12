import { useState, useEffect } from "react";
import ProductCard from './Product-Card';

function UserItems () {

const [productsDisplayState, setProductsDisplayState] = useState([])
const [username, setUsername] = useState("")

useEffect(() => {
  const getProductsData = async () => {
      try {
      const response = await fetch(`/api/users/me/`, {
        headers: {
          'Content-Type': 'application/json',
        }          
      })

      if (!response.ok) {
        throw new Error('something went wrong!');
      }     

      const userData = await response.json()
      const productsData = userData.products

      setUsername(userData.username)
     
      setProductsDisplayState(productsData)

    } catch (err) {
      console.error(err);
    }
  };

      getProductsData();
  }, []);  

return (

<div id="user-items" className="product-section">
  <h3>Your Current Items For Sale</h3>
  <div className="card-container">
    {productsDisplayState.map((product) => (
      <ProductCard 
        key={`u${product.id}`}    
        product={product}
        username={username ? username : ""}    
      />
    ))}
  </div>
</div>
  
)
}

export default UserItems