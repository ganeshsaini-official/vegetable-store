import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref:"User", required:true },
  items: [{ product:{type:mongoose.Schema.Types.ObjectId, ref:"Product"}, quantityKg:Number, price:Number }],
  totalAmount: Number,
  status: { type:String, enum:["Pending","Packed","Shipped","Delivered","Cancelled"], default:"Pending" },
  deliveryAddress: { type:Object }
}, { timestamps:true });


const Order = mongoose.model("Order", orderSchema);
export default  Order
