"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsPatchCheck } from "react-icons/bs";
import { LiaHeadsetSolid } from "react-icons/lia";
import { FcShipped } from "react-icons/fc";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { TbClockHour3Filled } from "react-icons/tb";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you can handle sending the form data, e.g., with an API call.
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.headerText}>Contact Us</h1>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>Home</Link> &gt; <span>Contact</span>
        </nav>
      </header>
      <div style={styles.mainText}>
        <h4 style={styles.mainTitle}>Get In Touch With Us</h4>
        <p style={styles.mainParagraph}>For More Information About Our Product & Services. Please Feel Free To Drop Us</p>
        <p style={styles.mainParagraph}>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>

      {/* Contact Section */}
      <section style={styles.section}>
        {/* Left Side: Address, Phone, Working Hours */}
        <div style={styles.leftSection}>
          <div style={styles.contactInfo}>
            <FaMapMarkerAlt size="2rem" />
            <h3 style={styles.contactTitle}>Address:</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div style={styles.contactInfo}>
            <FaPhoneAlt size="2rem" />
            <h3 style={styles.contactTitle}>Phone:</h3>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>
          <TbClockHour3Filled size="2rem" />
          <div style={styles.contactInfo}>
            <h3 style={styles.contactTitle}>Working Hours:</h3>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div style={styles.rightSection}>
          {isSubmitted ? (
            <div style={styles.successMessage}>
              <h3>Thank you for reaching out! We&apos;ll get back to you shortly.</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={styles.formInput}
              />
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.formInput}
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={styles.formInput}
              />
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={styles.formInput}
              ></textarea>
              <button type="submit" style={styles.button}>Send Message</button>
            </form>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div style={styles.footerItem}>
          <HiOutlineTrophy size="4rem" />
          <div>
            <h3 style={styles.footerTitle}>High Quality</h3>
            <p className="text-stone-500">Crafted from top materials</p>
          </div>
        </div>

        <div style={styles.footerItem}>
          <BsPatchCheck size="4rem" />
          <div>
            <h3 style={styles.footerTitle}>Warranty Protect</h3>
            <p className="text-stone-500">Over 2 years</p>
          </div>
        </div>

        <div style={styles.footerItem}>
          <FcShipped size="4rem" />
          <div>
            <h3 style={styles.footerTitle}>Free Shipping</h3>
            <p className="text-stone-500">Order over $150</p>
          </div>
        </div>

        <div style={styles.footerItem}>
          <LiaHeadsetSolid size="4rem" />
          <div>
            <h3 style={styles.footerTitle}>24/7 Support</h3>
            <p className="text-stone-500">Dedicated support</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundImage: "url('Rectangle 1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "316px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as "center", // Explicitly typing 'center'
    padding: "80px 0",
    backgroundColor: "#f8f9fa",
  },
  headerText: {
    color: "black",
    fontSize: "5rem",
    fontWeight: "bold",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
    marginBottom: "10px",
  },
  nav: {
    fontSize: "1rem",
    color: "black",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
  },
  navLink: {
    color: "black",
    fontWeight: "bold",
    textDecoration: "none",
  },
  mainText: {
    textAlign: "center" as "center", // Explicitly typing 'center'
    flex: 1,
    padding: "80px",
  },
  mainTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  mainParagraph: {
    textAlign: "center" as "center", // Explicitly typing 'center'
    fontSize: "1rem",
    color: "#555",
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    margin: "50px auto",
    maxWidth: "1200px",
  },
  leftSection: {
    flex: 1,
    paddingRight: "20px",
  },
  rightSection: {
    flex: 1,
    paddingLeft: "20px",
  },
  contactInfo: {
    marginBottom: "20px",
  },
  contactTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  successMessage: {
    textAlign: "center" as "center", // Explicitly typing 'center'
    color: "#28a745",
  },
  form: {
    display: "flex",
    flexDirection: "column" as "column", // Explicitly typing 'column'
    gap: "20px",
  },
  formInput: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#B88E2F",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  footer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px 0px",
    marginTop: "160px",
    textAlign: "center" as "center", // Explicitly typing 'center'
    borderTop: "1px solid #ddd",
  },
  footerItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  footerTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "0px",
  },
  footerText: {
    color: "#777",
  },
};

export default Contact;
