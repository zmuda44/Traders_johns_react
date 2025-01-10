import { useState, useEffect } from "react";
import ProductCard from './Product-Card';
// import { get } from "../../../server/controllers/api/productRoutes";

function CategoryItems (props) {

 function getCategoryName (categoryId) {
  const categoryNameData = async () => {
    try {
    const response = await fetch(`/api/category/${categoryId}`, {
      headers: {
        'Content-Type': 'application/json',
      }          
    })

    const categoryData = await response.json()
    console.log(categoryData)
    }
    catch (err) {
      console.log(err)
    }
  }
  categoryNameData(categoryId)
 }

 getCategoryName(props.categoryId)

 const [productsDisplayState, setProductsDisplayState] = useState([])

useEffect(() => {
  const getProductsData = async () => {
      try {
      const response = await fetch(`/api/products/category/${props.categoryId}`, {
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
  }, [props.categoryId]);



return (

<div id="category-items" className="product-section">

  <h3>Items in Chosen Category - {productsDisplayState.categoryId}</h3>
  <div className="card-container" >

    {productsDisplayState.map((product) => (
      <ProductCard 
      key={product.product_id}
      product={product}
      />
    ))}


  </div>

</div>
  
)
}

export default CategoryItems