import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; // Don't forget to import Link
import WatchedButton from './Watched-button'

function ProductCard({ product, username }) {
  return (
    <div key={product.id} className="card">
      {/* Link to the product details page with the productId */}
      <Link to={`/products/${product.id}`}>
        <h3 className="product-name">{product.product_name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">$ {product.price}</p>
        <img
          src={`./images/${product.category.category_name}.jpg`}
          alt={product.product_name}
        />
      </Link>

      <p className="product-creator">
        Sold by:
        {product.user?.username ? (
          <a href={`/user/${product.user_id}`} className="profile-link">
            {product.user.username}
          </a>
        ) : (
          'Trader Jons'
        )}
      </p>

      {username && (
        <WatchedButton productId={product.id} />
      )}
    </div>
  );
}

export default ProductCard;