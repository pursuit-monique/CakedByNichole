import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = ({ isOpen, toggleNavbar }) => {
  return (
    <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
      <NavLink to="/Shop" className="block md:inline-block mt-4 md:mt-0 mr-6  text-yellow-900 hover:text-pink-500">Shop</NavLink>
      <NavLink to="/CustomCakes" className="block md:inline-block mt-4 md:mt-0 mr-6  text-yellow-900 hover:text-pink-500">Custom Cakes</NavLink>
      <div className="md:hidden">
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-102 flex justify-end">
      <div></div>
      <div className="w-full md:flex md:justify-between">
        <NavLinks isOpen={isOpen} toggleNavbar={toggleNavbar} />
      </div>
    </nav>
  );
};

export default Nav;
