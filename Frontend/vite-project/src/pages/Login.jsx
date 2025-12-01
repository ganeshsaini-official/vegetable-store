import React, { useState } from "react";
import axios from 'axios'
import Cookies from 'js-cookie'

const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = async  (e) => {
        e.preventDefault();
        console.log(userData);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", userData)

                Cookies.set("token", res.data.token)
                console.log(res.data.user);
                alert(res.data.message)
            
        } catch (error) {
            alert(error?.response?.data?.message)
        }

    }
     return (
        <div style={styles.container}>
            <form onSubmit={submitHandler} style={styles.form}>
                <h2 style={styles.title}>Login</h2>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email</label>
                    <input onChange={changeHandler} value={userData.email} name="email" type="email" placeholder="Enter Email..." style={styles.input} />
                </div>

                <div style={styles.inputGroup}>
                    <label style={styles.label}>Password</label>
                    <input onChange={changeHandler} value={userData.password} name="password" type="password" placeholder="Enter Password..." style={styles.input} />
                </div>

                <button type="submit" style={styles.button}>Login</button>
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
        background: "#f1f1f1",
    },
    form: {
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        width: "320px",
        display: "flex",
        flexDirection: "column"
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "24px",
        fontWeight: "bold"
    },
    inputGroup: {
        marginBottom: "15px"
    },
    label: {
        display: "block",
        marginBottom: "5px",
        fontWeight: "600"
    },
    input: {
        width: "100%",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid gray",
        fontSize: "14px"
    },
    button: {
        padding: "12px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer"
    }
};
export default Login;


