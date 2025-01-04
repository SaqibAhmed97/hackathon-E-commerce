"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Sidebar toggle state

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="w-full py-[30px] px-[20px] md:pl-[54px] md:pr-[100px] bg-[#fff1dfbe]">
      <header className="flex justify-between items-center mx-auto h-fit">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/Meubel House_Logos-05.png"
            alt="logo"
            className="w-[50px] h-[32px]"
            width={100}
            height={100}
          />
          <h1 className="text-[24px] md:text-[34px] font-bold">
            <span className="text-blue-600">F</span>
            <span className="text-black">urniro</span>
          </h1>
        </div>

        {/* Burger Icon for Mobile Menu */}
        <div
          className="flex flex-col justify-between w-8 h-6 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <span
            style={{
              transform: isOpen ? "rotate(45deg) translate(10px, 5px)" : "",
            }}
            className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
          ></span>
          <span
            style={{ opacity: isOpen ? 0 : 1 }}
            className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
          ></span>
          <span
            style={{
              transform: isOpen ? "rotate(-45deg) translate(10px, -5px)" : "",
            }}
            className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
          ></span>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:relative left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-[75px] text-[16px] font-medium p-4 md:p-0">
            <li>
              <Link
                href="/"
                className="block py-2 md:py-0 hover:underline hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="block py-2 md:py-0 hover:underline hover:text-blue-600"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 md:py-0 hover:underline hover:text-blue-600"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 md:py-0 hover:underline hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex items-center gap-[45px]">
          <Link href="#">
            <Icon
              icon="mdi:account-alert-outline"
              className="w-7 h-7 text-black hover:text-blue-600"
            />
          </Link>
          <Link href="#">
            <Icon
              icon="si:search-line"
              className="w-7 h-7 text-black hover:text-blue-600"
            />
          </Link>
          <Link href="#">
            <Icon
              icon="solar:heart-linear"
              className="w-7 h-7 text-black hover:text-blue-600"
            />
          </Link>
          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className="relative flex items-center justify-center"
          >
            <Icon
              icon="streamline:shopping-cart-2"
              className="w-7 h-7 text-black hover:text-blue-600"
            />
            <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>
        </div>
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
          <button
            className="absolute top-4 right-4 text-black hover:text-red-600"
            onClick={toggleCart}
          >
            ✕
          </button>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <p>No items in the cart.</p>
            {/* Add cart items dynamically here */}
          </div>
        </div>
      )}
    </div>
  );
}
