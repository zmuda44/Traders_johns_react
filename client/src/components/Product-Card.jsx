import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
// import watchedItems from './Watched-items' // Import useNavigate if you're using react-router
import WatchedButton from './Watched-button'

function ProductCard ({ product, username }) {
  // const [watchedState, setWatchedState] = useState({}); 
  console.log(product.id)

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

      {username && <WatchedButton
        id={product?.id} />} 

    </div>
  );
}

export default ProductCard;

