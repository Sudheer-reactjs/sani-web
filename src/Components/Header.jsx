import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Hamburger, HamburgerClose } from "../Utils/Svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header>
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <HamburgerClose /> : <Hamburger />}
              </button>
            </div>
            <nav
              className={`nav-menu w-full lg:justify-end lg:pl-[72px] lg:flex lg:items-center ${isMobileMenuOpen ? "flex" : "hidden"
                }`}
            >
              <ul className="">
                <li>
                  <NavLink to="/about-us" onClick={toggleMobileMenu}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/how-it-work" onClick={toggleMobileMenu}>
                    How it works
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/plans" onClick={toggleMobileMenu}>
                    Plans
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/our-vision" onClick={toggleMobileMenu}>
                    Our Vision
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contacts" onClick={toggleMobileMenu}>
                    Contacts
                  </NavLink>
                </li>
              </ul>
              <div className="flex lg:ml-[32px]">
                <Link
                  className="button-gradient login-button"
                  to="/login"
                  onClick={toggleMobileMenu}
                >
                  Log In
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
