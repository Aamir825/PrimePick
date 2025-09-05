"use client"

import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button"
import { LiaShoppingCartSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string
  name: string
  image: string
  price: number
  oldPrice?: number
  onAddToCart: (id: string) => void
}

export default function ProductCard({ id, name, image, price, oldPrice, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white/50 backdrop-blur-md rounded-xl shadow-md border border-gray-200 flex flex-col transition hover:shadow-lg hover:scale-101 duration-300">

      {/* Product Image */}
      <div className="w-full h-40 overflow-hidden rounded-tl-lg rounded-tr-lg mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className=" w-full pb-4 px-4">
        {/* Product Name */}
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} className="text-yellow-400 inline-block mr-1 text-sm" />
        ))}
        <span className=" text-xs">4.6 reviews</span>

        {/* Product Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-green-600">${price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">${oldPrice}</span>
          )}
        </div>


        {/* Add to Cart & Buy Now Button */}
        <div className=" w-full flex gap-1">
        <Link to={`/products/${id}`}><Button className=" flex-1 rounded-md h-10 bg-transparent border border-gray-200 hover:bg-[#f5f5f5] cursor-pointer text-black">
          Buy Now
          <LiaShoppingCartSolid/>
        </Button></Link>
        <Button
          onClick={() => onAddToCart(id)}
          className=" flex-1 rounded-md h-10 bg-gradient-to-br from-[#041107] via-[#0e5718] to-[#031406] hover:bg-green-700 cursor-pointer text-white"
        >
          Add to Cart
          <LiaShoppingCartSolid/>
        </Button>
        </div>
      </div>

    </div>
  )
}
