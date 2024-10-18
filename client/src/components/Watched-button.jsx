import { useState, useEffect } from "react"; 


function WatchedButton ({ id }) {

  console.log(id)

  const [productsDisplayState, setProductsDisplayState] = useState([])

  useEffect(() => {
    const getProductsData = async () => {
        try {
        const response = await fetch(`/api/users/products/watched`, {
          headers: {
            'Content-Type': 'application/json',
          }          
        })
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }     
  
        const productsData = await response.json()
       
        setProductsDisplayState(productsData.user_watched_products)
  
      } catch (err) {
        console.error(err);
      }
    };
        getProductsData();
    }, []);    
  
  const handleWatchedSubmit = async (args) => {
    console.log(args)
    console.log(userState)

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

  console.log(productsDisplayState)

  return (
    <button onClick={() => handleWatchedSubmit(product.id)}>
    {!watchedState ? "Add to Watchlist" : "Remove from Watchlist" }</button>
  )

}