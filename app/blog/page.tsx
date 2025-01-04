"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsPatchCheck, BsSearch } from "react-icons/bs";
import { LiaHeadsetSolid } from "react-icons/lia";
import { FcShipped } from "react-icons/fc";
import Link from "next/link";

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: "1",
      title: "Top 10 Interior Design Trends for 2025",
      image: "/Rectangle 68.png",
      excerpt:
        "As we step into 2025, the world of interior design is embracing innovation, sustainability, and personal expression like never before. From bold color palettes to eco-friendly materials, this year's trends reflect a shift towards spaces that are as functional as they are stylish. Here’s a sneak peek into the top 10 trends set to dominate the design landscape.",
    },
    {
      id: "2",
      title: "How to Choose the Perfect Furniture",
      image: "/Rectangle 68 (1).png",
      excerpt:
        "Choosing the right furniture is an essential step in creating a home that reflects your personality and meets your everyday needs. From balancing style and comfort to ensuring functionality and durability, the perfect furniture can transform any space into a harmonious and inviting haven. This guide will help you navigate the key considerations to make informed decisions that align with your taste, budget, and lifestyle.",
    },
    {
      id: "3",
      title: "The Ultimate Guide to Home Decor",
      image: "/Rectangle 68 (2).png",
      excerpt:
        "Home decor is more than just arranging furniture or adding decorative items—it's an art that reflects your personality, taste, and lifestyle. Whether you're looking to revamp a single room or your entire home, this guide will provide you with inspiration and practical tips to create a space you'll love.",
    },
  ];

  const categories = [
    { name: "Interior Design", count: 12 },
    { name: "Furniture", count: 8 },
    { name: "Home Decor", count: 15 },
    { name: "Sustainability", count: 5 },
    { name: "Lighting", count: 7 },
  ];

  const recentPosts = [
    { id: "1", title: "5 Tips for Organizing Your Workspace", image: "/Rectangle 69.png" },
    { id: "2", title: "Choosing the Right Lighting for Your Home", image: "/Rectangle 69 (1).png" },
    { id: "3", title: "How to Incorporate Plants in Your Decor", image: "/Rectangle 69 (2).png" },
    { id: "4", title: "Maximizing Small Spaces Effectively", image: "/Rectangle 69 (3).png" },
    { id: "5", title: "The Power of Color in Interior Design", image: "/Rectangle 69 (4).png" },
  ];

  // Filter blog posts based on the search term
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header */}
      <header
        style={{
          backgroundImage: "url('Rectangle 1.png')", // Replace with your hero image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "1440",
          height: "316px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 0",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h1
  style={{
    color: "black",
    fontSize: "5rem",
    fontWeight: "bold",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
    marginBottom: "10px",
  }}
>
  Blog
</h1>
<nav
  style={{
    fontSize: "1rem",
    color: "black",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
  }}
>
  <Link href="/" style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}>
    Home
  </Link>{" "}
  &gt; <span>Blog</span>
</nav>

      </header>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {/* Blog Grid */}
        <section
          style={{
            flex: 3,
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "20px",
          }}
        >
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                background: "#fff",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "500px" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "#333",
                  }}
                >
                  {post.title}
                </h2>
                <p style={{ color: "#666", marginBottom: "15px" }}>{post.excerpt}</p>
                <button
                  style={{
                    backgroundColor: "#B88E2F",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  <Link href={`/blog/${post.id}`}>
                    Read More
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar */}
        <aside style={{ flex: 1 }}>
          {/* Search Bar */}
          <div style={{ marginBottom: "30px" }}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Recent Posts */}
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Recent Posts
            </h3>
            {recentPosts.map((post) => (
              <div
                key={post.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p style={{ color: "#333", fontSize: "0.9rem" }}>{post.title}</p>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Categories
            </h3>
            <ul style={{ listStyle: "none", padding: 0, color: "#333" }}>
              {categories.map((category, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "10px",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                  }}
                >
                  {category.name} <span style={{ color: "#999" }}>({category.count})</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer Section */}
      <footer
        className="bg-[#af95416e]"
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "40px 0px", // Reduced padding to make the footer shorter
          marginTop: "160px", // Adjusted margin to control the position
          textAlign: "center",
          borderTop: "1px solid #ddd", // Optional to visually separate from the products
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <HiOutlineTrophy size="4rem" />
          <div>
            <h3 className="font-bold text-3xl" style={{ marginBottom: "0px" }}>
              High Quality
            </h3>
            <p className="text-stone-500">Crafted from top materials</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <BsPatchCheck size="4rem" />
          <div>
            <h3 className="font-bold text-3xl" style={{ marginBottom: "0px" }}>
              Warranty Protect
            </h3>
            <p className="text-stone-500">Over 2 years</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FcShipped size="4rem" />
          <div>
            <h3 className="font-bold text-3xl" style={{ marginBottom: "0px" }}>
              Free Shipping
            </h3>
            <p className="text-stone-500">Order over $150</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LiaHeadsetSolid size="4rem" />
          <div>
            <h3 className="font-bold text-3xl" style={{ marginBottom: "0px" }}>
              24/7 Support
            </h3>
            <p className="text-stone-500">Dedicated support</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
