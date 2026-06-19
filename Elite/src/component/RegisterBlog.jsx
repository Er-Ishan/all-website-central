import React, { useState } from "react";
import NavbarElement from "./NavbarElement";
import Footer from "./Footer";
import Copyright from "./Copyright";

// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
import { useNavigate } from "react-router-dom";
// import Image from "@tiptap/extension-image";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useRef, useEffect } from "react";

const API = import.meta.env.VITE_API_URL;

const RegisterBlog = () => {
    const [form, setForm] = useState({
        title: "",
        slug: "",
        short_description: "",
        content: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
        status: "draft",
        image: null,
    });

    // 🧠 TipTap Editor
    // 🧠 TipTap Editor (ORIGINAL VERSION)
    // const editor = useEditor({
    //     extensions: [StarterKit, Image],
    //     content: "",
    //     editable: true,
    //     autofocus: true,
    //     onUpdate: ({ editor }) => {
    //         setForm((prev) => ({
    //             ...prev,
    //             content: editor.getHTML(),
    //         }));
    //     },
    // });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        // 🔥 Auto slug generator
        if (name === "title") {
            const slug = value
                .toLowerCase()
                .replace(/[^a-z0-9 ]/g, "")
                .replace(/\s+/g, "-");

            setForm({ ...form, title: value, slug });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleImageUpload = (e) => {
        setForm({ ...form, image: e.target.files[0] });
    };

    // const addImage = () => {
    //     const url = prompt("Enter image URL");
    //     if (url) {
    //         editor.chain().focus().setImage({ src: url }).run();
    //     }
    // };

    const editorRef = useRef(null);
    const quillRef = useRef(null);

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: "snow",
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        [{ font: [] }],
                        [{ size: [] }],
                        ["bold", "italic", "underline", "strike"],
                        [{ color: [] }, { background: [] }],
                        [{ script: "sub" }, { script: "super" }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ indent: "-1" }, { indent: "+1" }],
                        [{ align: [] }],
                        ["link", "image", "video"],
                        ["clean"],
                    ],
                },
            });

            // Sync editor content to form
            quillRef.current.on("text-change", () => {
                const html = quillRef.current.root.innerHTML;

                setForm((prev) => ({
                    ...prev,
                    content: html,
                }));
            });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        // append all fields
        formData.append("title", form.title);
        formData.append("slug", form.slug);
        formData.append("short_description", form.short_description);
        formData.append("content", form.content);
        formData.append("meta_title", form.meta_title);
        formData.append("meta_description", form.meta_description);
        formData.append("meta_keywords", form.meta_keywords);
        formData.append("status", form.status);

        // ✅ IMPORTANT: image must match backend name "image"
        if (form.image) {
            formData.append("image", form.image);
        }

        try {
            const res = await fetch(`${API}/api/blogs/create`, {
                method: "POST",
                body: formData, // ❌ NO JSON HERE
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ Blog created successfully");
                navigate("/blog-operations");
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

            <div className="blog-container">
                <div className="blog-card">

                    {/* HEADER */}
                    <div className="blog-header">
                        <div>
                            <h2 style={{ color: "#005c25" }}>Create New Blog</h2>
                            <p>Write and publish a professional blog post</p>
                        </div>
                        <button
                            className="back-btn"
                            onClick={() => navigate("/blog-operations")}
                        >
                            ← Back
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>

                        {/* BASIC INFO */}
                        <div className="section">
                            <h4>Basic Information</h4>

                            <div className="row">
                                <div className="form-group">
                                    <label>Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        placeholder="Enter blog title"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Slug</label>
                                    <input
                                        type="text"
                                        name="slug"
                                        value={form.slug}
                                        onChange={handleChange}
                                        placeholder="auto-generated"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Short Description</label>
                                <textarea
                                    name="short_description"
                                    value={form.short_description}
                                    onChange={handleChange}
                                    placeholder="Brief summary of the blog"
                                />
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="section">

                            <div className="section">
                                <h4>Content Editor</h4>

                                <div
                                    ref={editorRef}
                                    style={{
                                        height: "300px",
                                        background: "#fff",
                                        borderRadius: "6px",
                                    }}
                                />
                            </div>
                        </div>

                        {/* SETTINGS */}
                        <div className="section">
                            <h4>Settings</h4>

                            <div className="row">
                                <div className="form-group">
                                    <label>Featured Image</label>
                                    <input type="file" onChange={handleImageUpload} />
                                </div>

                                <div className="form-group">
                                    <label>Status</label>
                                    <select
                                        name="status"
                                        value={form.status}
                                        onChange={handleChange}
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* SEO */}
                        <div className="section">
                            <h4>SEO Settings</h4>

                            <div className="row">
                                <div className="form-group">
                                    <label>Meta Title</label>
                                    <input
                                        type="text"
                                        name="meta_title"
                                        value={form.meta_title}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Meta Keywords</label>
                                    <input
                                        type="text"
                                        name="meta_keywords"
                                        value={form.meta_keywords}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Meta Description</label>
                                <textarea
                                    name="meta_description"
                                    value={form.meta_description}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* SUBMIT */}
                        <div className="submit-row">
                            <button type="submit" className="submit-btn">
                                Publish Blog
                            </button>
                        </div>

                    </form>
                </div>
            </div>
{/* 
            <Footer />
            <Copyright /> */}

            <style>
                {`
                    .blog-container {
  background: #f4f7fb;
  padding: 50px 20px;
}

/* CARD */
.blog-card {
  max-width: 1347px;
  margin: auto;
  padding: 35px;
  border: 1px solid black;
}

/* HEADER */
.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.new-content{
  background-color: #fff;
}

.blog-header h2 {
  font-weight: 700;
  margin-bottom: 5px;
}

.blog-header p {
  color: #777;
  font-size: 14px;
}

.back-btn {
  border: 1px solid #ddd;
  background: #fff;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.back-btn:hover {
  background: #f0f0f0;
}

/* SECTIONS */
.section {
  margin-bottom: 35px;
}

.section h4 {
  margin-bottom: 15px;
  font-weight: 600;
  border-left: 4px solid #005c25;
  padding-left: 10px;
}

/* FORM */
.row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 13px;
  margin-bottom: 6px;
  font-weight: 500;
  color: #444;
}

input,
textarea,
select {
  padding: 11px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: 0.2s;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #005c25;
  outline: none;
  box-shadow: 0 0 0 2px rgba(0,92,37,0.08);
}

textarea {
  min-height: 90px;
}

/* TOOLBAR */
.toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.toolbar button {
  padding: 6px 10px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s;
}

.toolbar button:hover {
  background: #f5f5f5;
}

/* EDITOR */
.editor-box {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  min-height: 250px;
}

.editor-box .ProseMirror {
  min-height: 220px;
  outline: none;
}

.editor-box .ProseMirror p {
  margin: 0;
}

/* SUBMIT */
.submit-row {
  text-align: right;
}

.submit-btn {
  background: #005c25;
  color: #fff;
  padding: 12px 22px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  background: #000;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}
                `}
            </style>
        </>
    );
};

export default RegisterBlog;