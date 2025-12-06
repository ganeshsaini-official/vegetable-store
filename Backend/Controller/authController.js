import User from "../Model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv"

env.config()
// -------------------------------
// Helper: Generate Token
// -------------------------------
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  })
};

// -------------------------------
// REGISTER USER
// -------------------------------

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all required fields!" });
    }

   const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists with this email!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // Return success + token
    res.status(201).json({
      message: "Registration Successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      token: generateToken(user._id),
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------
// LOGIN USER
// -------------------------------

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter email and password" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    // Generate token
    const token = generateToken(user._id);

    // ⭐ TOKEN KO DB ME SAVE KARO
    user.token = token;
    await user.save();

    // Send user data (without password)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      token: token, // optional
    };

    return res.status(200).json({
      message: "Login successful",
      user: userData,
      token: token, // frontend localStorage me save karega
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    return res.status(500).json({ message: "Server error, try again later" });
  }
};



// -------------------------------
// LOGOUT USER
// -------------------------------
export const logoutUser = async (req, res) => {
  try {
    // Frontend token ko remove karega
    res.json({ message: "Logout Successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------
// GET USER PROFILE
// -------------------------------
export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;  // authMiddleware se milta h

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json({
      message: "Profile fetched successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

