import { IoLogoXbox } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-4/5 mx-auto">
      <div className="flex justify-between items-center bg-white shadow-md py-4 px-6 rounded-full mt-3">
        <div className=" flex gap-4 items-center">
          <div>
            <IoLogoXbox size={36} />
          </div>
          <div>
            <ul className=" flex gap-3">
              <li><NavLink to="/" className={({ isActive }) => ` text-xs ${isActive ? " underline" : ""}`}>Home</NavLink></li>
              <li><NavLink to="/products" className={({ isActive }) => ` text-xs ${isActive ? " underline" : ""}`}>Products</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => ` text-xs ${isActive ? " underline" : ""}`}>Contact</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => ` text-xs ${isActive ? " underline" : ""}`}>About</NavLink></li>
            </ul>
          </div>
        </div>
        <div className=" space-x-2">
          <button className=" px-5 py-1 rounded-md bg-white shadow-sm">Login</button>
          <button className=" px-5 py-1 rounded-md text-white shadow-sm bg-gradient-to-br from-[#041107] via-[#0e5718] to-[#031406]">Start Now</button>
        </div>
      </div>
    </nav>
  )
}

export default Header