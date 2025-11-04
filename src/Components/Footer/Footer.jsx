// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* 1️⃣ Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">EventSphere</h2>
          <p className="text-gray-400 leading-relaxed">
            Discover and experience the best events happening around you.
            Join concerts, festivals, workshops, and more — all in one place.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-cyan-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:text-cyan-400 transition-colors"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact / Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
          <p className="text-gray-400 mb-4">
            Follow us on social media for updates and event announcements.
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} EventSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
