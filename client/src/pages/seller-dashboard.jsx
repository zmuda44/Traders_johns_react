import { useState, useEffect } from "react";
import PopularItems from '../components/Popular-items.jsx'
import WatchedItems from '../components/Watched-items.jsx'
import UserItems from '../components/User-items.jsx'
import CreateProduct from '../components/Create-product.jsx'

function SellerDashboard () {
  
  const [productsDisplayState, setProductsDisplayState] = useState([])

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
  
       
       
        setProductsDisplayState(productsData)
  
      } catch (err) {
        console.error(err);
      }
    };
  
        getProductsData();
    }, []);  


  

return (
<div className="card-container">
{productsDisplayState.map((product) => (

  <div key={product.id} className="card" value="">
    <h3 className="product-name">{product.product_name}</h3>
    <p className="product-description">{product.description}</p>
    <p className="product-price">$ {product.price} </p>
    <img src={`./public/images/${product.category.category_name}.jpg`} />
  </div>

))}


</div>

)}

export default SellerDashboard

