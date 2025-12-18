import Wholesale from "../Model/WholesaleRequest.js";

// 🟢 CREATE WHOLESALE REQUEST
export const createWholesaleRequest = async (req, res) => {
  try {
    const {
      buyerName,
      businessName,
      phone,
      email,
      address,
      items,
      expectedDeliveryDate,
      note,
    } = req.body;

    // basic validation
    if (!buyerName || !phone || !items || items.length === 0 || !expectedDeliveryDate) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    const wholesale = await Wholesale.create({
      buyerName,
      businessName,
      phone,
      email,
      address,
      items,
      expectedDeliveryDate,
      note,
      requestedBy: req.user._id, // 🔥 correct field
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Wholesale request submitted successfully",
      wholesale,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟡 GET USER WHOLESALE REQUESTS
export const getUserWholesaleRequests = async (req, res) => {
  try {
    const requests = await Wholesale.find({ requestedBy: req.user._id })
      .populate("items.product");

    res.json({ success: true, requests });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔵 GET ALL WHOLESALE REQUESTS (ADMIN)
export const getAllWholesaleRequests = async (req, res) => {
  try {
    const requests = await Wholesale.find()
      .populate("requestedBy", "name email phone")
      .populate("items.product");

    res.json({
      success: true,
      total: requests.length,
      requests,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟠 ADMIN UPDATE STATUS / RESPONSE
export const updateWholesaleStatus = async (req, res) => {
  try {
    const { status, adminResponse } = req.body;

    const validStatus = ["pending", "approved", "rejected", "delivered"];
    if (status && !validStatus.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }

    const updated = await Wholesale.findByIdAndUpdate(
      req.params.id,
      { status, adminResponse },
      { new: true }
    );

    res.json({
      success: true,
      message: "Wholesale request updated",
      updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
