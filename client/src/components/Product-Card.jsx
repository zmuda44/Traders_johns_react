import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; // Import useNavigate if you're using react-router

function ProductCard ({ product }) {
  const [userState, setUserState] = useState({ userName: "" })
  const [watchedState, setWatchedState] = useState({});
  const navigate = useNavigate(); // Assuming you're using react-router for navigation

  useEffect(() => {
    const getUserData = async () => {
        try {
        const response = await fetch(`/api/users/me`, {
          headers: {
            'Content-Type': 'application/json',
          }          
        })
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }     
  
        const user = await response.json()
       
        setUserState({
          userName: user.username || ""
        });
  
        
  
      } catch (err) {
        console.error(err);
      }
    };
  
        getUserData();
    }, []);

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
      {userState.userName && (
        <button onClick={() => handleWatchedSubmit(product.id)}>Add to watchlist</button>
      )}
     
    </div>
  );
}

export default ProductCard;
