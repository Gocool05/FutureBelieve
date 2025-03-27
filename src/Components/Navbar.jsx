import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import AuthModal from "../Pages/Auth/AuthModal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setBgColor(true);
        } else {
            setBgColor(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const showNav = () => {
  setToggle(!toggle);
};

  const navbarData = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about-us" },
    { title: "Dealers", href: "/dealers" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed z-50 top-0 left-0 min-w-full h-20 px-5 md:px-20 flex justify-between items-center transition-all duration-300 ${
        bgColor ? "bg-purple-900 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <img className="md:h-14 h-12" src="/LOGO.png" alt="Logo" />

      {/* Mobile Menu Icon */}
      <CgMenuRightAlt
        onClick={() => setToggle(!toggle)}
        className="md:hidden h-6 w-6 text-white cursor-pointer"
      />

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10">
        {navbarData.map((link, index) => (
          <Link
            key={index}
            className="text-white hover:text-purple-400 transition-all"
            to={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Login & Playstore Icon */}
      <div className=" hidden md:flex items-center gap-5">
        <button
          className="flex border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-medium px-4 py-1 rounded"
          onClick={() => setModalOpen(true)}
        >
          Login
        </button>

        <img
          className="h-12 cursor-pointer "
          src="/PlayStore Png.png"
          alt="Playstore Logo"
        />
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="absolute top-[80px] left-0 w-full bg-purple-900 text-white flex flex-col items-center space-y-4 py-5 md:hidden">
          {navbarData.map((link, index) => (
            <Link
              key={index}
              className="w-full text-center py-2 hover:bg-purple-700"
              to={link.href}
              onClick={() => setToggle(false)}
            >
              {link.title}
            </Link>
          ))}

          <button
            className="w-3/4 border-2 border-white py-2 text-white hover:bg-white hover:text-purple-500 rounded"
            onClick={() => {
              setModalOpen(true);
              setToggle(false);
            }}
          >
            Login
          </button>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
