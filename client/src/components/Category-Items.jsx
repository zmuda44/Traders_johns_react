import { useState, useEffect } from "react";
import ProductCard from './Product-Card';

function CategoryItems (props) {
  console.log(props)

  const [productsDisplayState, setProductsDisplayState] = useState([]);
  const [categoryDisplayState, setCategoryDisplayState] = useState({ categoryName: "" });

  // Fetch products and category name when categoryId changes
  useEffect(() => {
    const getCategoryData = async () => {
      try {
        // Fetch products for the selected category
        const productsResponse = await fetch(`/api/products/category/${props.categoryId}`, {
          headers: { 'Content-Type': 'application/json' }
        });
        if (!productsResponse.ok) {
          throw new Error('Something went wrong while fetching products!');
        }
        const productsData = await productsResponse.json();

        setProductsDisplayState(productsData);  

        setCategoryDisplayState({ categoryName: productsData[0].category.category_name });

      } catch (err) {
        console.error(err);
      }
    };

    getCategoryData();
  }, [props.categoryId]);

  return (
    <div id="category-items" className="product-section">
      {/* Dynamically update the heading based on the selected category */}
      <h3>{props.chosen ? `Chosen Category is ${categoryDisplayState.categoryName}` : categoryDisplayState.categoryName || 'Category Items'}</h3>

      <div className="card-container">
        {productsDisplayState.map((product) => (
          <ProductCard 
            key={`c${product.id}`}
            // key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryItems;
