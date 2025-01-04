"use client"; // Mark this as a Client Component

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsPatchCheck } from "react-icons/bs";
import { LiaHeadsetSolid } from "react-icons/lia";
import { FcShipped } from "react-icons/fc";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Syltherine",
      price: 499.99,
      image: "/images/image-1.png",
      description: "A comfortable and stylish modern sofa.",
      inStock: true,
      
    },
    {
      id: "2",
      name: "Leviosa",
      price: 149.99,
      image: "/images/image-2.png",
      description: "A sleek wooden chair for your living room.",
      inStock: true,
    },
    {
      id: "3",
      name: "Lolito",
      price: 799.99,
      image: "/images/image-3.png",
      description: "A spacious dining table for family meals.",
      inStock: false,
    },
    {
      id: "4",
      name: "Respira",
      price: 49.99,
      image: "/images/image-4.png",
      description: "A stylish lamp for cozy lighting.",
      inStock: true,
    },
    {
      id: "5",
      name: "Syltherine",
      price: 999.99,
      image: "/images/image-1.png",
      description: "A luxurious and comfortable bed.",
      inStock: true,
    },
    {
      id: "6",
      name: "Leviosa",
      price: 249.99,
      image: "/images/image-2.png",
      description: "A modern desk for study or work.",
      inStock: true,
    },
    {
      id: "7",
      name: "Lolito",
      price: 399.99,
      image: "/images/image-3.png",
      description: "An armchair designed for relaxation.",
      inStock: true,
    },
    {
      id: "8",
      name: "Respira",
      price: 199.99,
      image: "/images/image-4.png",
      description: "A durable table for outdoor use.",
      inStock: true,
    },
    {
      id: "9",
      name: "Syltherine",
      price: 349.99,
      image: "/images/image-1.png",
      description: "A stylish bookshelf for your collection.",
      inStock: true,
    },
    {
      id: "10",
      name: "Leviosa",
      price: 299.99,
      image: "/images/image-2.png",
      description: "A sleek and modern coffee table.",
      inStock: true,
    },
    {
      id: "11",
      name: "Lolito",
      price: 199.99,
      image: "/images/image-3.png",
      description: "A set of stylish dining chairs.",
      inStock: true,
    },
    {
      id: "12",
      name: "Respira",
      price: 59.99,
      image: "/images/image-4.png",
      description: "Decorative wall art for your home.",
      inStock: true,
    },
    {
      id: "13",
      name: "Syltherine",
      price: 499.99,
      image: "/images/image-1.png",
      description: "A comfortable and stylish modern sofa.",
      inStock: true,
    },
    {
      id: "14",
      name: "Leviosa",
      price: 149.99,
      image: "/images/image-2.png",
      description: "A sleek wooden chair for your living room.",
      inStock: true,
    },
    {
      id: "15",
      name: "Lolito",
      price: 799.99,
      image: "/images/image-3.png",
      description: "A spacious dining table for family meals.",
      inStock: false,
    },
    {
      id: "16",
      name: "Respira",
      price: 49.99,
      image: "/images/image-4.png",
      description: "A stylish lamp for cozy lighting.",
      inStock: true,
    },
    {
      id: "17",
      name: "Syltherine",
      price: 999.99,
      image: "/images/image-1.png",
      description: "A luxurious and comfortable bed.",
      inStock: true,
    },
    {
      id: "18",
      name: "Leviosa",
      price: 249.99,
      image: "/images/image-2.png",
      description: "A modern desk for study or work.",
      inStock: true,
    },
    {
      id: "19",
      name: "Lolito",
      price: 399.99,
      image: "/images/image-3.png",
      description: "An armchair designed for relaxation.",
      inStock: true,
    },
    {
      id: "20",
      name: "Respira",
      price: 199.99,
      image: "/images/image-4.png",
      description: "A durable table for outdoor use.",
      inStock: true,
    },
    {
      id: "21",
      name: "Syltherine",
      price: 349.99,
      image: "/images/image-1.png",
      description: "A stylish bookshelf for your collection.",
      inStock: true,
    },
    {
      id: "22",
      name: "Leviosa",
      price: 299.99,
      image: "/images/image-2.png",
      description: "A sleek and modern coffee table.",
      inStock: true,
    },
    {
      id: "23",
      name: "Lolito",
      price: 199.99,
      image: "/images/image-3.png",
      description: "A set of stylish dining chairs.",
      inStock: true,
    },
    {
      id: "24",
      name: "Respira",
      price: 59.99,
      image: "/images/image-4.png",
      description: "Decorative wall art for your home.",
      inStock: true,
    },
    {
      id: "25",
      name: "Syltherine",
      price: 129.99,
      image: "/images/image-1.png",
      description: "A chic rug to enhance your decor.",
      inStock: true,
    },
    {
      id: "26",
      name: "Leviosa",
      price: 89.99,
      image: "/images/image-2.png",
      description: "A minimalist floor lamp.",
      inStock: true,
    },
    {
      id: "27",
      name: "Lolito",
      price: 599.99,
      image: "/images/image-3.png",
      description: "A durable and comfortable outdoor sofa.",
      inStock: true,
    },
    {
      id: "28",
      name: "Respira",
      price: 449.99,
      image: "/images/image-4.png",
      description: "A modern cabinet for storage needs.",
      inStock: true,
    },
  
  // Add the rest of your products here
];

const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const totalPages = Math.ceil(mockProducts.length / productsPerPage);

  const currentProducts = mockProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
          Shop
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
  &gt; <span>Shop</span>
</nav>
      </header>

      {/* Products Grid */}
       <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
          gap: "30px",
          padding: "50px",
        }}
      >
        {currentProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              background: "#fff",
              textAlign: "center",
            }}
          >
            <div style={{  position: "relative", width: "100%", height: "300px" }}>
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div style={{ padding: "20px" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "10px 0" }}>
                {product.name}
              </h2>
              <p style={{ color: "#666", margin: "10px 0" }}>{product.description}</p>
              <p style={{ fontSize: "1rem", fontWeight: "bold", margin: "10px 0" }}>
                ${product.price.toFixed(2)}
              </p>
              <button
                disabled={!product.inStock}
                style={{
                  backgroundColor: product.inStock ? "#28a745" : "#ccc",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: product.inStock ? "pointer" : "not-allowed",
                  fontWeight: "bold",
                }}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0",
          gap: "10px",
        }}
      >
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          style={{
            padding: "10px 20px",
            backgroundColor: currentPage === 1 ? "#ccc" : "#B88E2F",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            padding: "10px 20px",
            backgroundColor: currentPage === totalPages ? "#ccc" : "#B88E2F",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
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

export default Shop;
