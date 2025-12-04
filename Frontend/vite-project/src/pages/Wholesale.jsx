import React, { useState } from "react";

const Wholesale = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setUploading(true);
      const res = await fetch("http://localhost:5000/api/upload/image", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data.url);
      setUploading(false);
      alert("Image uploaded successfully!");
    } catch (err) {
      console.error(err);
      setUploading(false);
      alert("Upload failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Upload Your Image</h1>

      <form
        onSubmit={handleUpload}
        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-4"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {imageUrl && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Uploaded Image:</h2>
          <img src={imageUrl} alt="Uploaded" className="max-w-sm rounded shadow" />
        </div>
      )}
    </div>
  );
};

export default Wholesale;
