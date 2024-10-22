import { useState, useEffect } from "react";
import ProductCard from './Product-Card';

function PopularItems() {
  const [productsDisplayState, setProductsDisplayState] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await fetch(`/api/products/popular`, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const productsData = await response.json();
        setProductsDisplayState(productsData);

      } catch (err) {
        console.error(err);
      }
    };

    getProductsData();
  }, []);


  return (
    <div id="popular-items" className="product-section">
      <h3>Popular Items</h3>
      <div className="card-container">
        {productsDisplayState.map((product) => (
          <ProductCard 
            key={`p${product.id}`}    
            product={product.product}    
          />
        ))}
      </div>
    </div>
  );
}

export default PopularItems;
