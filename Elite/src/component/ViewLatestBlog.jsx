import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import NavbarElement from "./NavbarElement";
import Footer from "./Footer";
import Copyright from "./Copyright";
import { useParams, useNavigate } from "react-router-dom";


const API = import.meta.env.VITE_API_URL;

const ViewLatestBlog = () => {
  const { slug  } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  const canonicalUrl = `https://www.heathroweliteparking.co.uk/blog/${blog?.slug}`;

  useEffect(() => {
    fetch(`${API}/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [slug ]);

  if (!blog) {
    return <div style={{ padding: "80px", textAlign: "center" }}>Loading blog...</div>;
  }

  return (
    <>

      <Helmet>
        <title>{blog.meta_title || blog.title}</title>

        <meta
          name="description"
          content={blog.meta_description || blog.short_description}
        />

        <meta
          name="keywords"
          content={blog.meta_keywords || ""}
        />

        <link rel="canonical" href={`https://www.heathroweliteparking.co.uk/view-latest-blog/${blog?.slug} `} />

        {/* OG Tags */}
        <meta property="og:title" content={blog.meta_title || blog.title} />
        <meta property="og:description" content={blog.meta_description || blog.short_description} />
        <meta property="og:image" content={blog.featured_image || ""} />
        <meta property="og:url" content={`https://www.heathroweliteparking.co.uk/view-latest-blog/${blog?.slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>


      <NavbarElement />

      {/* HERO */}
      <section className="blog-hero">
        <div className="hero-overlay">
          <h1>{blog.title}</h1>
          <p>
            {new Date(blog.created_at).toDateString()}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="blog-wrapper">
        <div className="blog-container">

          {/* FEATURED IMAGE */}
          {/* FEATURED IMAGE */}
          {blog.image && (
            <div className="blog-image-wrapper">
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-image"
              />
            </div>
          )}

          {/* SHORT DESCRIPTION */}
          {blog.short_description && (
            <p className="blog-short">{blog.short_description}</p>
          )}

          {/* CONTENT */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>

          {/* BACK BUTTON */}
          <div className="back-area">
            <button onClick={() => navigate("/blogs")}>
              ← BACK TO BLOGS
            </button>
          </div>

        </div>
      </section>

      <Footer />
      <Copyright />

      {/* 🔥 FULL CSS */}
      <style>{`
        /* HERO */
        .blog-hero {
          width: 100%;
          height: 300px;
          background: linear-gradient(rgba(0,92,37,0.85), rgba(0,92,37,0.85)),
            url(${blog.image || ""}) center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
        }

        .hero-overlay h1 {
          font-size: 36px;
          font-weight: 700;
          max-width: 900px;
          margin: auto;
        }

        .hero-overlay p {
          margin-top: 10px;
          font-size: 14px;
          opacity: 0.9;
        }

        /* WRAPPER */
        .blog-wrapper {
          width: 100%;
          background: #f4f7fb;
          padding: 50px 20px;
        }

        .blog-container {
          width: 100%;
          max-width: 1384px;
          margin: auto;
          background: #fff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* IMAGE */
        .blog-image-wrapper {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

.blog-image {
  width: 100%;
  max-width: 900px;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

        /* SHORT DESC */
        .blog-short {
          font-size: 17px;
          font-weight: 500;
          color: #444;
          margin-bottom: 25px;
        }

        /* CONTENT */
        .blog-content {
          font-size: 16px;
          line-height: 1.8;
          color: #222;
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3 {
          margin-top: 25px;
          margin-bottom: 10px;
          color: #005c25;
        }

        .blog-content p {
          margin-bottom: 15px;
        }

        .blog-content ul {
          padding-left: 20px;
          margin-bottom: 15px;
        }

        .blog-content li {
          margin-bottom: 8px;
        }

        .blog-content img {

          max-width: 100%;
          margin: 20px 0;
          border-radius: 6px;
        }

        /* BACK BUTTON */
        .back-area {
          margin-top: 40px;
          text-align: center;
        }

        .back-area button {
          background: #005c25;
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .back-area button:hover {
          background: #000;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-overlay h1 {
            font-size: 24px;
          }

          .blog-container {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ViewLatestBlog;