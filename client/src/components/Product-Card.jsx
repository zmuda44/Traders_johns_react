import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
// import watchedItems from './Watched-items' // Import useNavigate if you're using react-router
import WatchedButton from './Watched-button'

function ProductCard ({ product }) {
  const [userState, setUserState] = useState({ userName: "" })
  const [watchedState, setWatchedState] = useState({});
  const navigate = useNavigate(); // Assuming you're using react-router for navigation

  useEffect(() => {
    // Need this to know if you are signed out or not
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
        {userState.userName && <WatchedButton
        id={product.id} />} 

    </div>
  );
}

export default ProductCard;
