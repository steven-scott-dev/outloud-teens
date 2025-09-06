import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="text-center">
        <Logo size="sm" className="flex-col text-center mb-3" />

        <p className="text-sm text-gray-400 mb-4">
          Your safe space to learn, share, and shine.
        </p>

        <div className="flex justify-center gap-6 text-sm mb-4">
          <a href="/about" className="hover:text-neonPink transition">About</a>
          <a href="/privacy" className="hover:text-neonPink transition">Privacy</a>
          <a href="/contact" className="hover:text-neonPink transition">Contact</a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} OutLoud Teens – All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;