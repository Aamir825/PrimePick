import { CiSearch } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";


const ProductTopFilters = () => {
  return (
    <div className=" w-full flex justify-between gap-2 pb-2">
        <div className=" relative">
            <input type="text" placeholder="Search..." className=" border border-gray-100 outline-none pl-2 pr-8 rounded-full py-1"/>
            <CiSearch className=" absolute top-2 right-3 text-gray-400"/>
        </div>
        <div className=" flex gap-1">
            <FaListUl className=" border border-gray-100 rounded-full p-2 shadow-sm" size={32}/>
            <IoGrid className=" border border-gray-100 rounded-full p-2 shadow-sm" size={32}/>
        </div>
    </div>
  )
}

export default ProductTopFilters