import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 text-2xl font-bold text-white tracking-wide hover:text-cyan-400 transition-colors"
    >
      <img
        src="/logo.png"
        alt="EventSphere Logo"
        className="w-8 h-8 object-contain mix-blend-color-dodge"
      />
      <span>EventSphere</span>
    </Link>
  );
};

export default NavbarLogo;
