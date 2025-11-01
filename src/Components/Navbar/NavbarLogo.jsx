// src/components/NavbarLogo.jsx
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="text-2xl font-bold text-white tracking-wide hover:text-cyan-400 transition-colors"
    >
      EventSphere
    </Link>
  );
};

export default NavbarLogo;
