import { useState } from "react";
import "./newProduct.css";
import axios from "axios";
import { addProducts } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let imageUrl = "";

    // If a file is selected, upload it to Imgur
    if (file) {
      const data = new FormData();
      data.append("file", file);

      try {
        const res = await axios.post("http://clickart-backend.vercel.app/api/upload-imgur", data); // Update this endpoint based on your server
        imageUrl = res.data.url; // Get the Imgur URL from the response
        console.log("Uploaded image URL:", imageUrl);
      } catch (err) {
        console.error("Failed to upload image to Imgur:", err);
        return; // Stop further execution if image upload fails
      }
    }

    // Prepare the product object
    const product = {
      ...inputs,
      categories: cat,
      img: imageUrl, // Use the uploaded image URL
    };

    // Dispatch the product addition action
    addProducts(product, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Apple Airpods" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" name="desc" placeholder="description..." onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" name="price" placeholder="100" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="jeans,skirts" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
