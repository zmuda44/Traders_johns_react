import { useState, useEffect } from "react";

function WatchedButton({ id }) {
  const [watchedState, setWatchedState] = useState(false); // Initially assume it's not watched

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await fetch(`/api/users/products/watched`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const productsData = await response.json();

        // Check if the current product (with `id`) is in the user's watched products
        const isWatched = productsData.user_watched_products.some(
          (product) => product.id === id
        );
        setWatchedState(isWatched); // Set the initial watched state
      } catch (err) {
        console.error(err);
      }
    };

    getProductsData();
  }, [id]); // Run the effect when the component mounts or when `id` changes

  const handleWatchedSubmit = async () => {
    try {
      const method = watchedState ? "DELETE" : "POST"; // Use DELETE if removing, POST if adding
      const response = await fetch(`/api/users/products/${id}/watched`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Toggle the watched state after a successful API call
        setWatchedState(!watchedState);
        console.log(
          watchedState
            ? "Product removed from watchlist successfully."
            : "Product added to watchlist successfully."
        );
      } else {
        console.log(
          watchedState
            ? "Failed to remove product from watchlist."
            : "Failed to add product to watchlist."
        );
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <button onClick={handleWatchedSubmit}>
      {!watchedState ? "Add to Watchlist" : "Remove from Watchlist"}
    </button>
  );
}

export default WatchedButton;
