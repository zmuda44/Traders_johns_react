import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CreateProduct () {
  const navigate = useNavigate()
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [productFormState, setProductFormState] = useState({
    product_name: "",
    description: "",
    price: "",
    category_id: 1,
    // username: "",
  })

  const handleProductChange = (event) => {
    const { name, value } = event.target;
    setProductFormState({
      ...productFormState,
      [name]: value,
    });
  };

  const handleProductFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productFormState),
      });

      if (response.ok) {
        // Redirect back to profile to work as page reload for Render
        window.location.reload()
        // navigate('/profile');

      } else {
        console.log("Login failed.");
      }  

    } catch (e) {
      console.error(e);
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); // Preview the selected image
  };


  return (
    <div className="create-new-product">
      <h3>Create a New Product:</h3>
      <form id="new-product">
        <div className="form-section">
          <label htmlFor="product-name">Product name:</label>
          <input type="text" 
          id="product-name" 
          name="product_name" 
          value={productFormState.product_name}
          onChange={handleProductChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="product-description">Product Description</label>
          <textarea
                className="form-input"
                id="product-description"
                name="description"
                value={productFormState.description}
                onChange={handleProductChange}
              />
        </div>
        <div className="form-section">
          <label htmlFor="price">Price</label>
          <input className="form-input" 
          id="price"
          name="price"
          value={productFormState.price}
          onChange={handleProductChange}
          />
        </div>
        <div className="form-section">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" width="200" />}
        </div>

        <div className="form-section">
          <label htmlFor="product-category">Category</label>
          <select id="product-category" name="category_id" onChange={handleProductChange} rname="product-category">
            <option
            value="1" >Produce</option>
            <option
            value="2" >Meat</option>
            <option
            value="3" >Seafood</option>
            <option
            value="4" >Snacks</option>
            <option
            value="6">Dry-Goods</option>
            <option
            value="7">Canned-Goods</option>
            <option
            value="8">Condiments</option>
            <option
            value="9">Bakery</option>
            <option
            value="10">Cereal</option>
            <option
            value="11">Frozen-Goods</option>
          </select>
        </div>
        <div className="form-section">
          <button className="product-create-btn" onClick={handleProductFormSubmit}>List a new product</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct