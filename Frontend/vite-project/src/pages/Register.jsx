import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
  });

  const changeHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );

      Cookies.set("token", res.data.token);
      console.log(res.data.user);
      alert(res.data.message);
    } catch (error) {
      alert(error?.response?.data?.message);
      console.log(error?.response);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={submitHandler} style={styles.form}>
        <h2 style={styles.title}>Register</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Name</label>
          <input
            name="name"
            value={userData.name}
            onChange={changeHandler}
            type="text"
            placeholder="Enter Name..."
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            name="email"
            value={userData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Enter Email..."
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            name="password"
            value={userData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Enter Password..."
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            name="phone"
            value={userData.phone}
            onChange={changeHandler}
            type="text"
            placeholder="Enter Phone Number..."
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f0f0",
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 0px 12px rgba(0,0,0,0.15)",
    width: "350px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "26px",
    fontWeight: "700",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid gray",
    fontSize: "15px",
  },
  button: {
    padding: "12px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "17px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Register;
