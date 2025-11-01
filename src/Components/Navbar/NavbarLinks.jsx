// src/components/NavbarLinks.jsx
import { NavLink, Link } from "react-router-dom";
import Register from "../../Assets/Resgister";

const NavbarLinks = ({ isMobile, onLinkClick }) => {
  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 text-white hover:text-cyan-400 transition-colors ${
      isActive ? "text-cyan-400 font-semibold" : ""
    }`;

  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col items-start w-full" : "flex-row items-center gap-6"
      }`}
    >
      <li>
        <NavLink to="/" className={linkClasses} onClick={onLinkClick}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/events" className={linkClasses} onClick={onLinkClick}>
          Events
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={linkClasses} onClick={onLinkClick}>
          Contact
        </NavLink>
      </li>
      <li>
        <Link
          to="/events"
          onClick={onLinkClick}
          >
          <Register/>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
