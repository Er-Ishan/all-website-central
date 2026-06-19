import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Copyright from "./Copyright";
import "./blogOperation.css";
import NavbarElement from "./NavbarElement";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const BlogOperation = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // 🔐 PROTECT ROUTE
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login-blogs"); // redirect to login
        }

        // 🔥 Fetch blogs
        fetch(`${API}/api/blogs/all`)
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });

    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token"); // remove token
        navigate("/admin-blogs");
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`${API}/api/blogs/delete/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ Blog deleted");

                // 🔥 remove from UI instantly (no reload)
                setBlogs((prev) => prev.filter((blog) => blog.id !== id));

            } else {
                alert("❌ " + data.error);
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    };

    return (


        <>
            <NavbarElement />

            <section className="blog-operation">
                <div className="container">

                    {/* HEADER */}
                    <div className="top-bar">
                        <h2>Blogs</h2>

                        <div className="actions">
                            <button
                                className="create-btn"
                                onClick={() => navigate("/blog-registration")}
                            >
                                + CREATE BLOG
                            </button>

                            {/* ✅ LOGOUT */}
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* TABLE */}
                    <div className="table-wrapper">
                        <table className="blog-table">
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Title</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Created</th>
                                    <th className="text-center">Image</th>
                                    <th className="">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td className="text-center" colSpan="6" style={{ textAlign: "center" }}>
                                            Loading blogs...
                                        </td>
                                    </tr>
                                ) : blogs.length === 0 ? (
                                    <tr>
                                        <td className="text-center" colSpan="6" style={{ textAlign: "center" }}>
                                            🚫 No blogs created yet
                                        </td>
                                    </tr>
                                ) : (
                                    blogs.map((blog) => (
                                        <tr key={blog.id}>
                                            <td className="text-center">{blog.id}</td>
                                            <td className="text-center">{blog.title}</td>

                                            <td className="text-center">
                                                <span className="status-badge">
                                                    {blog.status}
                                                </span>
                                            </td>

                                            <td className="text-center">
                                                {new Date(blog.created).toLocaleDateString()}
                                            </td>

                                            <td className="text-center">
                                                {blog.image ? (
                                                    <img
                                                        src={blog.image}
                                                        alt="blog"
                                                        className="blog-img"
                                                    />
                                                ) : (
                                                    "No Image"
                                                )}
                                            </td>

                                            <td className="action-icons text-center">
                                                <button
                                                    className="icon-btn view-btn text-center"
                                                    onClick={() => navigate(`/blog/${blog.slug}`)}
                                                >
                                                    <FaEye />
                                                </button>

                                                <button
                                                    className="icon-btn edit-btn"
                                                    onClick={() => navigate(`/edit-blog/${blog.id}`)}
                                                >
                                                    <FaEdit />
                                                </button>

                                                <button
                                                    className="icon-btn delete-btn"
                                                    onClick={() => handleDelete(blog.id)}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

            <Footer />
            <Copyright />
        </>
    );
};

export default BlogOperation;