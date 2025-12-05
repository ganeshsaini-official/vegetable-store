import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", data.name);
    form.append("price", data.price);
    form.append("image", image);

    const res = await axios.post("http://localhost:5000/api/products", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(res.data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Add New Product
        </h2>

        {/* Image Preview */}
        {preview && (
          <div className="w-full flex justify-center mb-4">
            <img
              src={preview}
              alt="Preview"
              className="h-32 w-32 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        <form onSubmit={submitHandler} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          {/* Price Input */}
          <input
            type="number"
            placeholder="Price"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />

          {/* Image Input */}
          <input
            type="file"
            accept="image/*"
            className="w-full border rounded-lg py-2 px-2 cursor-pointer"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setPreview(URL.createObjectURL(e.target.files[0]));
            }}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
