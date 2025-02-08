import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null);


  useEffect(() => {
    // You can replace this with an actual API call to fetch product details
    const fetchProduct = async () => {
      
      try {

        console.log(productId)
        
        const response = await fetch(`/api/products/id/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // Display loading state while fetching data
  }

  return (
    <div className="product-details">
      <h1>{product.product_name}</h1>
      <p>{product.description}</p>
      <p><strong>Price: </strong>${product.price}</p>
      <p><strong>Category: </strong>{product.category.category_name}</p>
      {/* Displaying an image based on category */}
      <img src={`./images/${product.category.category_name}.jpg`} alt={product.product_name} />
    </div>
  );
};

export default ProductDetails;
