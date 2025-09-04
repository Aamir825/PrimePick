import { IoLogoXbox } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { LiaShoppingCartSolid } from "react-icons/lia";

const Header = () => {
  return (
    <nav className="w-full fixed top-5 z-50">
      <div className=" w-4/5 mx-auto flex justify-between items-center backdrop-blur-md bg-white/30 shadow-sm py-4 px-6 rounded-full ">
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
        <div className=" flex items-center gap-2">
          <button className=" px-8 py-2 rounded-md bg-white shadow-sm">Login</button>
          <Link to="" className=" relative p-2 rounded-full border border-[#f0f0f0] bg-amber-50 text-[#505050] shadow-sm">
            <LiaShoppingCartSolid size={24} />
            <div className=" absolute text-green-600 bg-white shadow-md rounded-full px-2 py-0.5 -top-3 left-2 text-[10px] ">3</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header