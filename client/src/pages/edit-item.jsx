import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function EditItem () {
  const [ sellerDisplayState, setSellerDisplayState ] = useState([])
  const [ productsDisplayState, setProductsDisplayState ] = useState([])
  const userId = useParams().userId

  useEffect(() => {
    const getSellerData = async () => {
        try {
        const response = await fetch(`/api/users/seller/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
          }          
        })
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }     
  
        const sellerData = await response.json()
        const productsData = sellerData.products
  
        setSellerDisplayState(sellerData)
        setProductsDisplayState(productsData)

      } catch (err) {
        console.error(err);
      }
    };
  
    getSellerData();
    }, []);

    console.log(sellerDisplayState)
    console.log(productsDisplayState)
  return (
    <>
    <div>You have reached {sellerDisplayState.username} page</div>
      <div className="card-container">

{productsDisplayState.map((product) => (

  <div key={product.id} className="card" value="">
    <h3 className="product-name">{product.product_name}</h3>
    <p className="product-description">{product.description}</p>
    <p className="product-price">$ {product.price} </p>
    <img src={`./public/images/${product.category.category_name}.jpg`} />
    <p className="product-creator">
    Sold by: 
    {product.user?.username ? (
    <a href={`/user/${product.user_id}`} className="profile-link">
    {product.user.username}
    </a>
   ) : "Trader Jons"}
    </p>
  </div>
))}


</div>




    </>


  )
}

export default EditItem



