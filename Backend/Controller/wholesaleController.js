import Wholesale from "../models/Wholesale.js";
import User from "../models/User.js";

// 🟢 CREATE WHOLESALE REQUEST
export const createWholesaleRequest = async (req, res) => {
  try {
    const { items, businessName, contactNumber, expectedDate } = req.body;

    const wholesale = await Wholesale.create({
      user: req.user._id,
      items,
      businessName,
      contactNumber,
      expectedDate,
      status: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Wholesale request submitted successfully!",
      wholesale,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟡 GET ALL WHOLESALE REQUESTS (ADMIN)
export const getAllWholesaleRequests = async (req, res) => {
  try {
    const requests = await Wholesale.find().populate("user");

    res.json({
      success: true,
      total: requests.length,
      requests,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 🟠 UPDATE WHOLESALE QUOTE (ADMIN)
export const updateWholesaleQuote = async (req, res) => {
  try {
    const { quoteAmount, status } = req.body;

    const updated = await Wholesale.findByIdAndUpdate(
      req.params.id,
      { quoteAmount, status },
      { new: true }
    );

    res.json({
      success: true,
      message: "Wholesale quote updated successfully",
      updated,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 🔵 GET USER WHOLESALE REQUESTS
export const getUserWholesaleRequests = async (req, res) => {
  try {
    const myRequests = await Wholesale.find({ user: req.user._id });

    res.json({ success: true, myRequests });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
