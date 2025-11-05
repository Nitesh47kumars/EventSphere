// src/components/Navbar.jsx
import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="px-5 mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Links */}
        <div className="hidden md:flex">
          <NavbarLinks onLinkClick={closeMenu} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none hover:text-cyan-400"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-4 py-3">
          <NavbarLinks isMobile onLinkClick={closeMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
