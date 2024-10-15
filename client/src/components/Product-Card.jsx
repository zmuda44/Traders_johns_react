import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; // Import useNavigate if you're using react-router

function ProductCard ({ product }) {
  const [watchedState, setWatchedState] = useState({});
  const navigate = useNavigate(); // Assuming you're using react-router for navigation

 console.log(product)

  const handleWatchedSubmit = async (args) => {


    console.log(args)

    try {
      const response = await fetch(`/api/users/products/${product.id}/watched`, { // Replace `yourUserId` with actual user ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ productId: product.product_id }), // Send the product ID in the body
      });

      if (response.ok) {
        // Optionally handle success, such as updating UI state or displaying a message
        console.log("Product added to watchlist successfully.");
        // Optionally navigate or show a success message
      } else {
        console.log("Failed to add product to watchlist.");
      }  
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <div key={product.id} className="card">
      <h3 className="product-name">{product.product_name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">$ {product.price} </p>
      <img src={`./public/images/${product.category.category_name}.jpg`} alt={product.product_name} />
      <p className="product-creator">
        Sold by: 
        {product.user?.username ? (
          <a href={`/user/${product.user_id}`} className="profile-link">
            {product.user.username}
          </a>
        ) : "Trader Jons"}
      </p>
      <button onClick={() => handleWatchedSubmit(product.id)}>Add to watchlist</button>
        <p>{product.id}</p>
    </div>
  );
}

export default ProductCard;
