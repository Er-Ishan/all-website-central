import { useEffect, useState } from "react";
import Copyright from "./Copyright";
import Footer from "./Footer";
import NavbarElement from "./NavbarElement";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function Blog() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/api/blogs/all`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return (
    <>
      <NavbarElement></NavbarElement>
      <div className="container-fluid blog-section py-5">
        <div className="container">

          {/* HEADING */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
            <h2 className="blog-title">
              Blogs
            </h2>
          </div>

          {/* BLOG GRID */}
          <div className="row g-4">
            <div className="row g-4">
              {loading ? (
                <p className="text-center">Loading blogs...</p>
              ) : blogs.length === 0 ? (
                <p className="text-center">🚫 No blogs available</p>
              ) : (
                blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} navigate={navigate} />
                ))
              )}
            </div>

          </div>
        </div>

        {/* ================= CSS ================= */}
        <style>{`

.blog-section {
  background: linear-gradient(180deg, #f8fafc, #eef2ff);
  padding-top: 60px;
  padding-bottom: 60px;
}

/* TITLE */
.blog-title {
  font-size: 34px;
  font-weight: 700;
  color: #005c25;
  margin-bottom: 10px;
}

/* SUBTITLE */
.blog-subtitle {
  font-size: 16px;
  color: #475569;
  line-height: 1.7;
}

/* CARD */
.blog-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-6px);
}

/* IMAGE */
.blog-img-wrapper {
  position: relative;
}

.blog-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

/* DATE BADGE */
.blog-date {
  position: absolute;
  bottom: -18px;
  left: 20px;
  background: #005c25;
  color: #fff;
  padding: 6px 14px;
  font-size: 14px;
  border-radius: 6px;
}

/* CONTENT */
.blog-content {
  padding: 40px 20px 20px;
  flex-grow: 1;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #64748b;
  margin-bottom: 10px;
}

/* TITLE */
.blog-heading {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 10px;
}

/* TEXT */
.blog-text {
  font-size: 15px;
  color: #475569;
  line-height: 1.7;
}

/* BUTTON */
.blog-read {
  padding: 0 20px 20px;
}

.blog-read a {
  text-decoration: none;
  font-weight: 600;
  color: #005c25;
  transition: 0.3s;
}

.blog-read a:hover {
  color: #003d19;
}

/* MOBILE */
@media (max-width: 768px) {
  .blog-title {
    font-size: 28px;
  }

  .blog-img {
    height: 200px;
  }
}

.blog-read {
  padding: 0 20px 20px;
}

.blog-read-btn {
  background: #005c25;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
}

.blog-read-btn:hover {
  background: #003d19;
  transform: translateY(-2px);
}

.blog-read-btn:active {
  transform: translateY(0);
}

.blog-read-btn {
  display: inline-block;
  background: #005c25;
  color: #fff;
  text-decoration: none;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.blog-read-btn:hover {
  background: #003d19;
  color: #fff;
  transform: translateY(-2px);
  text-decoration: none;
}

.blog-read-btn:active {
  transform: translateY(0);
}

.blog-heading {
  margin-bottom: 12px;
  line-height: 1.4;
}

.blog-title-link {
  text-decoration: none;
  color: #0f172a;
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
  transition: all 0.3s ease;
  position: relative;
}

.blog-title-link:hover {
  color: #005c25;
  transform: translateX(2px);
}

.blog-title-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 2px;
  background: #005c25;
  transition: width 0.3s ease;
  border-radius: 10px;
}

.blog-title-link:hover::after {
  width: 100%;
}

.blog-title-link:focus {
  outline: none;
  color: #005c25;
}

.blog-title-link:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 92, 37, 0.2);
  border-radius: 4px;
}

      `}</style>
      </div>

      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}


/* ================= CARD ================= */

function BlogCard({ blog, navigate }) {
  return (
    <div className="col-lg-4 col-md-6 d-flex">
      <div className="blog-card w-100">

        <div style={{ position: "relative" }}>
          <img
            src={blog.image || "https://via.placeholder.com/400"}
            alt={blog.title}
            className="blog-img"
          />

          <div className="blog-date">
            {new Date(blog.created).toLocaleDateString()}
          </div>
        </div>

        <div className="blog-content">
          {/* <h4 className="blog-heading">{blog.title}</h4> */}
          <h6 className="blog-heading">
            <Link
              to={`/blog/${blog.slug}`}
              className="blog-title-link"
            >
              {blog.title}
            </Link>
          </h6>

          {/* <p className="blog-text">
            {blog.short_description?.slice(0, 100)}...
          </p> */}
        </div>

        <div className="blog-read">
          <Link
            to={`/blog/${blog.slug}`}
            className="blog-read-btn text-white"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}