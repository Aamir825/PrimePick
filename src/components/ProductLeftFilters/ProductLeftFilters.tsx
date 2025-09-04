"use client"

import { useState } from "react"
import { Slider } from "../ui/slider"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import { FaStar } from "react-icons/fa"
import { MdFilterAltOff } from "react-icons/md";

const categories = ["Electronics", "Fashion", "Home & Living", "Beauty", "Sports", "Toys"]

export default function ProductLeftFilters() {
  const [price, setPrice] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const ratings = [5, 4, 3, 2, 1]

  return (
    <aside className="w-full md:w-64 bg-white/50 backdrop-blur-md shadow-md rounded-xl pb-5 border border-gray-200">
      <div className=" mb-4 border-b border-gray-100 px-5 py-2 flex justify-between items-center">
        <h3 className="text-lg font-bold ">Filters</h3>
        <MdFilterAltOff/>
      </div>

      {/* Categories */}
      <div className="mb-6 px-5 border-b border-gray-200 pb-4">
        <h4 className="font-semibold text-sm mb-3">Categories</h4>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <Label
              key={category}
              className="flex items-center gap-2 cursor-pointer hover:text-green-600"
            >
              <Checkbox
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              {category}
            </Label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6 px-5 border-b border-gray-200 pb-4">
        <h4 className="font-semibold text-sm mb-3">Price Range</h4>
        <Slider
          value={price}
          onValueChange={setPrice}
          max={1000}
          step={10}
          className="mb-2"
        />
        <p className="text-sm text-gray-600">
          ${price[0]} - ${price[1]}
        </p>
      </div>

      {/* Ratings */}
      <div className=" px-5">
        <h4 className="font-semibold text-sm mb-3">Rating</h4>
        <div className="flex flex-col gap-2">
          {ratings.map((star) => (
            <button
              key={star}
              onClick={() => setSelectedRating(star)}
              className={`flex items-center gap-1 text-sm hover:text-yellow-500 transition ${
                selectedRating === star ? "text-yellow-500 font-semibold" : "text-yellow-400"
              }`}
            >
              {Array.from({ length: star }).map((_, idx) => (
                <FaStar key={idx} />
              ))}
              <span className=" text-[10px] text-gray-500">12</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
