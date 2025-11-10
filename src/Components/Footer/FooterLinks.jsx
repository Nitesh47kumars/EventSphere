import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/events" className="hover:text-cyan-400 transition-colors">
            Events
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
