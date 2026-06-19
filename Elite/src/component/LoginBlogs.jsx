import React, { useState } from "react";
import NavbarElement from "./NavbarElement";
import Footer from "./Footer";
import Copyright from "./Copyright";
import "./loginBlogs.css";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const LoginBlogs = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      // ✅ save token
      localStorage.setItem("token", data.token);

      // ✅ redirect
      navigate("/blog-operations");
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};

  return (
    <>
      <NavbarElement />

      <section className="blog-login-section">
        <div className="container-fluid px-5">
          <div className="row align-items-center justify-content-start">

            {/* LEFT SIDE */}
            <div className="col-lg-6 left-content">
              <p className="tagline">— Secure Blog Management</p>
              <h1>Heathrow Elite Blog</h1>

              <ul>
                <li>✔ Create helpful guides and news for travellers.</li>
                <li>✔ Manage published and draft posts with ease.</li>
                <li>✔ Styled consistently with destination pages.</li>
              </ul>
            </div>

            {/* RIGHT SIDE LOGIN */}
            <div className="col-lg-6 d-flex justify-content-center">
               <div className="login-card small-card">
                <h2>Blog Admin Login</h2>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Username *</label>
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      placeholder="Enter username"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Password *</label>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  <button type="submit" className="login-btn">
                    LOGIN TO DASHBOARD
                  </button>
                </form>
              </div>
            </div>

            

          </div>
        </div>
      </section>

      <Footer />
      <Copyright />
    </>
  );
};

export default LoginBlogs;