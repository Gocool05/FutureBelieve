import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const [bgColor, setBgColor] = useState(false);

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
        {
          title: "Home",
          href: "/",
          cname:
            "border-t font-medium w-full flex justify-center p-2.5 mt-3 md:border-none md:p-0 md:mt-0 md:w-auto"
        },
        {
          title: "About us",
          href: "/about-us",
          cname:
            "border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto"
        },
        {
          title: "Services",
          href: "/",
          cname:
            "border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto"
        },
        {
          title: "Contact",
          href: "/contact",
          cname:
            "border-t border-b font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto"
        }
      ];

      
    // start mobile first plus facile
    return (
      <nav className={`fixed z-50 top-0 w-full ${bgColor ? 'bg-purple-600' : 'bg-transparent'}  items-center flex p-4`}>
        <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
          <h1 className="text-xl text-white font-bold cursor-pointer">Future Believe</h1>
  
          <button
            className="flex justify-end md:hidden ring-1 ring-black rounded"
            onClick={showNav}
          >
            <i className="fas fa-bars text-white w-9 h-9 flex justify-center items-center hover:text-black"></i>
          </button>
  
          <ul
            className={`${
              toggle ? " flex" : " hidden"
            } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
          >
            {navbarData.map((link, index) => {
              return (
                <li key={index} className={link.cname}>
                  <Link
                    className="text-white hover:text-purple-400"
                    to={link.href}
                    onClick={showNav}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            className={`${
              toggle ? " flex" : " hidden"
            } text-indigo-800 hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gray-100 px-1 p-2 rounded-lg mt-4 w-24`}
          >
            Login
          </button>
        </div>
      </nav>
    );
}

export default Navbar