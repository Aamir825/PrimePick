import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { IoLogoXbox } from "react-icons/io"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className=" bg-gradient-to-br text-white from-[#041107] via-[#0e5718] to-[#031406] pt-10">
      <div className=" w-4/5 mx-auto flex gap-32 pb-16">
        <div>
          <IoLogoXbox size={36} className=" mb-3" />
          <p className="mb-1">abc@gmail.com</p>
          <p>+92 334897698</p>
        </div>
        <div className=" flex justify-between w-full px-10">
          <div>
            <h2 className=" font-semibold">Solutions</h2>
            <ul className=" space-y-2 mt-2">
              <li><Link to="">Home</Link></li>
              <li><Link to="">Products</Link></li>
              <li><Link to="">Contact</Link></li>
              <li><Link to="">About</Link></li>
            </ul>
          </div>
          <div>
            <h2 className=" font-semibold">Customers</h2>
            <ul className=" space-y-2 mt-2">
              <li><Link to="">Home</Link></li>
              <li><Link to="">Products</Link></li>
              <li><Link to="">Contact</Link></li>
              <li><Link to="">About</Link></li>
            </ul>
          </div>
          <div>
            <h2 className=" font-semibold">Resources</h2>
            <ul className=" space-y-2 mt-2">
              <li><Link to="">Home</Link></li>
              <li><Link to="">Products</Link></li>
              <li><Link to="">Contact</Link></li>
              <li><Link to="">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-4/5 mx-auto flex justify-between pb-4">
        <div>
          <p>&copy; Copyright 2025 All Rights Reserved.</p>
        </div>
        <div className=" flex gap-4">
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </div>
  )
}

export default Footer