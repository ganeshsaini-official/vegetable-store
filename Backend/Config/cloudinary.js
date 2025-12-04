import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "de59xamhh",       // Cloud name from your dashboard
  api_key: "448372194132275",    // API key
  api_secret: "i4F5vtz0eMvqGFButApqRwZxoEw", // Replace ***** with your actual API secret
});

export default cloudinary;
