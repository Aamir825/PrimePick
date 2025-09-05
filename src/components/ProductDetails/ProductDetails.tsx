import { FaMinus, FaPlus, FaStar } from "react-icons/fa"
import { LiaShoppingCartSolid } from "react-icons/lia"
import { Button } from "../ui/button"
import ProductReview from "../ProductReviews/ProductReviews"
import { useParams } from "react-router-dom"

const ProductDetails = () => {

  const { id } = useParams();
  console.log(" product id", id)
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 py-10">
        {/* Left Side - Images */}
        <div className="flex-1">
          <div className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-3 border border-gray-200">
            <img
              src="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg"
              alt=""
              className="rounded-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[
              "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
              "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg",
              "https://cdn.pixabay.com/photo/2017/08/02/20/42/black-and-white-2573314_1280.jpg",
              "https://cdn.pixabay.com/photo/2018/01/14/00/05/makeup-3081015_1280.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-24 w-full object-cover rounded-lg border border-gray-200 hover:scale-105 transition-transform cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">
            Product Name
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-600 text-sm">(120 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-green-600">$99.99</span>
            <span className="text-lg text-gray-400 line-through">$129.99</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-lg">
            This is a high-quality product made with the finest materials.
            Perfect for adding style and functionality to your life.
          </p>

          {/* Counter */}
          <div className="flex items-center gap-3 mt-2">
            <Button className="h-10 w-10 border bg-white shadow-sm border-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-100 cursor-pointer text-black">
              <FaMinus />
            </Button>
            <span className="px-2 text-lg font-semibold">1</span>
            <Button className="h-10 w-10 border bg-white shadow-sm border-gray-200 rounded-full flex items-center justify-center text-sm hover:bg-gray-100 cursor-pointer text-black">
              <FaPlus />
            </Button>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <Button className="h-12 w-44 bg-gradient-to-br from-[#041107] via-[#0e5718] to-[#031406] hover:from-green-700 hover:to-green-900 text-white">
              Add to Cart
              <LiaShoppingCartSolid className="text-xl" />
            </Button>
            <Button className="h-12 px-10 bg-transparent border border-gray-300 text-black hover:bg-gray-100">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <ProductReview
        initialReviews={[
          {
            name: "Jane Smith",
            rating: 4,
            comment: "Really good, but the shipping was a bit slow.",
            date: "Aug 12, 2025"
          }
        ]}
      />
    </div>
  )
}

export default ProductDetails
