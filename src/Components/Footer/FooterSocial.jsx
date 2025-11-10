import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
      <p className="text-gray-400 mb-4">
        Follow me on social media for updates and event announcements.
      </p>
      <div className="flex space-x-4 text-lg">
        <a
          href="https://www.linkedin.com/in/nitesh-kumar-b18348346/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.instagram.com/nitesh47kumars/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors"
        >
          <FaInstagram />
        </a>

        <a
          href="https://x.com/Niteshshah028"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
