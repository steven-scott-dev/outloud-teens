// src/components/Navbar.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Blog", "Resources", "Community", "Contact"];

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo links home */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <Logo size="sm" showText />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `transition hover:text-neonPink ${
                  isActive ? "text-neonPink font-semibold" : "text-white"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl hover:text-neonPink transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black flex flex-col space-y-2 px-4 pb-4">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `transition hover:text-neonPink ${
                  isActive ? "text-neonPink font-semibold" : "text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}