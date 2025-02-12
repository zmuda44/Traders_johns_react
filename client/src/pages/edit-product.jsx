import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import EditProductForm from '../components/Edit-product-form'


function EditItem () {
  const [ userDisplayState, setUserDisplayState ] = useState({})
  const [ productDisplayState, setProductDisplayState ] = useState({})
  const [ productFormState, setProductFormState ] = useState({})
  const [isEditing, setIsEditing] = useState(false); // State to show/hide the form

  const productId = useParams().productId

  useEffect(() => {
    const getUserData = async () => {
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

        setUserDisplayState(userData)      

  
      } catch (err) {
        console.error(err);
      }
    };
  
        getUserData();
    }, []);  




  useEffect(() => {
    const getProductData = async () => {
        try {   
        const response = await fetch(`/api/users/product/${productId}`, {
          headers: {
            'Content-Type': 'application/json',
          }          
        })        
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }     
  
        // const sellerData = await response.json()
        const productData = await response.json()
  
        // setSellerDisplayState(sellerData)
        setProductDisplayState(productData)
        setProductFormState(productData); // Initialize form state with product data

      } catch (err) {
        console.error(err);
      }
    };
  
    getProductData();
    }, [productId]);


  return (      
  <div className="edit-product" >
    <div className="container" >

      {userDisplayState.id == productDisplayState.user_id ? (
        <>
          <h3 className="product-name">{productDisplayState.product_name}</h3>
          <p className="product-description">{productDisplayState.description}</p>
          <p className="product-price">$ {productDisplayState.price}</p>
          {productDisplayState.category ? productDisplayState.category.category_name : "Category not available"}
          {/* <img src={`./public/images/${productDisplayState.category}.jpg`} /> */}
          
          <button onClick={() => setIsEditing(true)}>Update or delete product</button>
          
          {isEditing && <EditProductForm
            productId={productFormState.id}
            originalProductFormState={productFormState} 
          />}
        </>
      ) : (
        <h1>This is not your product, visit seller dashboard or login to view product</h1>
      )}
      <Link to="seller-dashboard"><p>Back to Seller Dashboard</p></Link>
    </div>
  </div>
  )
}

export default EditItem



