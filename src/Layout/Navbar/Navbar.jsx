import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./Hamburger";
import { navItems } from "./NavItems";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [navColor, setScrollValue] = useState(false);
 const changeNavColor = () => {
   if (window.scrollY > 50) {
     setScrollValue(true);
   } else {
     setScrollValue(false);
   }
 }
 useEffect(()=>{
  window.addEventListener("scroll", changeNavColor);
  return () => {
    window.removeEventListener("scroll", changeNavColor);
  };
 },[])

  return (
    <nav
      className={`sticky top-0 z-40 py-4  ${
        navColor ? "bg-white border-b" : "bg-violet-100"
      }`}
    >
      <div className="max-w-[90%] mx-auto hidden md:flex items-center justify-between">
        <Link to={"/"} className="text-3xl font-bold">
          CareerHub
        </Link>
        <ul className="md:flex items-center hidden gap-5 text-base capitalize px-10">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id}>
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? "text-blue-600 bg-black px-3 py-2 rounded duration-1000"
                      : "text-black";
                  }}
                  to={navItem.path}
                >
                  {navItem.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded text-white font-semibold">
          Start Applying
        </button>
      </div>
      <div className="md:hidden w-full flex justify-between px-4">
        <h1 className="text-2xl text-slate-600 font-bold">
          <Link to={"/"}>CareerHub</Link>
        </h1>
        <label htmlFor="hamburger">
          <span className="cursor-pointer text-3xl">
            <GiHamburgerMenu />
          </span>
        </label>
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
