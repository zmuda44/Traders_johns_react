import { useState } from "react";





function EditProductForm ({ originalProductFormState, productId} ) {
  // const [image, setImage] = useState(null);
  // const [preview, setPreview] = useState(null);

  // const originalProductFormState = props.originalProductFormState 
  
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const [productFormState, setProductFormState] = useState({ 
    ...originalProductFormState,
    productId
  })

  const handleProductChange = (event) => {
    const { name, value } = event.target;
    setProductFormState({
      ...productFormState,
      [name]: value,
    });
  };

  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(`/api/users/product/${productId}/edit`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },       
      });

      if (response.ok) {
        // Redirect to the homepage upon successful login
        navigate('/');

      } else {
        console.log("Delete failed.");
      }  

    } catch (e) {
      console.error(e);
    }
  }

  const handleProductFormSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch(`/api/users/product/${productId}/edit`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productFormState),
      });

      if (response.ok) {
        // Redirect to the homepage upon successful login
        navigate('/');

      } else {
        console.log("Update failed.");
      }  

    } catch (e) {
      console.error(e);
    }
  };

  const handleShowDeleteConfirmation = () => {
    setShowDeleteConfirmation(true); // Show the confirmation when delete is clicked
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false); // Hide the confirmation if the user cancels
  };
  
    // const handleImageChange = (e) => {
    //   const file = e.target.files[0];
    //   setImage(file);
    //   setPreview(URL.createObjectURL(file)); // Preview the selected image
    // };



  return (


      <div className="edit-product-form">
        <h3>Edit Product:</h3>
        <form onSubmit={handleProductFormSubmit}>
          <div className="form-section">
            <label htmlFor="product-name">Product name:</label>
            <input
              type="text"
              id="product-name"
              name="product_name"
              value={productFormState.product_name || ''}
              onChange={handleProductChange}
            />
          </div>
          <div className="form-section">
            <label htmlFor="product-description">Product Description:</label>
            <textarea
              id="product-description"
              name="description"
              value={productFormState.description || ''}
              onChange={handleProductChange}
            />
          </div>
          <div className="form-section">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={productFormState.price || ''}
              onChange={handleProductChange}
            />
          </div>
          <div className="form-section">
            <label htmlFor="product-category">Category:</label>
            <select
              id="product-category"
              name="category_id"
              value={productFormState.category_id || ''}
              onChange={handleProductChange}
            >
              <option value="1">Produce</option>
              <option value="2">Meat</option>
              <option value="3">Seafood</option>
              <option value="4">Snacks</option>
              <option value="6">Dry-Goods</option>
              <option value="7">Canned-Goods</option>
              <option value="8">Condiments</option>
              <option value="9">Bakery</option>
              <option value="10">Cereal</option>
              <option value="11">Frozen-Goods</option>
            </select>
          </div>
          <div className="form-section">
            <button type="submit">Update Product</button>
            <button onClick={handleShowDeleteConfirmation}>Delete Product</button>

            {showDeleteConfirmation && (
            <>
              <p>Are you sure you want to delete this product?</p>
              <button type="button" onClick={handleDeleteProduct}>
                Confirm Delete
              </button>
              <button type="button" onClick={handleCancelDelete}>
                Cancel
              </button>
            </>
          )}

          </div>
        </form>
      </div>
  )
}


export default EditProductForm