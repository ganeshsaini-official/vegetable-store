import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/vegetable_store");
    console.log("Data base connected...!!");
    
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
