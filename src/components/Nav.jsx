import { NavLink } from "react-router-dom";
import { Menu , X } from "lucide-react" 
import { useState } from "react";
const NavLinks = () => {
  return (
    <>
      <NavLink to="/about"></NavLink>

      <NavLink to="/Home">Home</NavLink>

      <NavLink to="/Shop">Shop</NavLink>

      <NavLink to="/Custom Cakes">Custom Cakes</NavLink>

      <NavLink to="/Treats">Treats</NavLink>

      <NavLink to="/About">About</NavLink>

      <NavLink to="/Blog">Blog</NavLink>
    </>
  );
};


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-1/3 flex justify-end">
      <div></div>
      <div className="hidden w-full md:flex justify-between">
        <NavLinks />
        <div/>
          <div className="md:hidden">
            <button onClick={toggleNavbar}> {isOpen ? <X /> : < Menu />}</button>
        </div>

      </div>
    </nav>
  );
};



export default Nav;
