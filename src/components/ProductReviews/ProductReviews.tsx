import React, { useState } from "react"
import { FaStar } from "react-icons/fa"

type Review = {
  name: string
  rating: number
  comment: string
  date: string
}

type ProductReviewSectionProps = {
  initialReviews?: Review[]
}

const ProductReview:React.FC<ProductReviewSectionProps> = ({ initialReviews = [] }) => {
  const [reviews, setReviews] = useState<Review []>(initialReviews)
  const [name, setName] = useState("")
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !rating || !comment) return alert("Please fill all fields")

    const newReview = {
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    }
    setReviews([newReview, ...reviews])
    setName("")
    setRating(0)
    setComment("")
  }

  return (
    <div className="mt-10">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Reviews</h2>

      {/* Existing Reviews */}
      <div className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              {/* Name & Date */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">{rev.name}</h3>
                <span className="text-sm text-gray-500">{rev.date}</span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < rev.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600">{rev.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        )}
      </div>

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm my-6"
      >
        <h3 className="text-lg font-semibold mb-3">Write a Review</h3>

        {/* Name */}
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:ring focus:ring-green-200"
        />

        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`cursor-pointer text-xl ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>

        {/* Comment */}
        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 h-24 resize-none focus:ring focus:ring-green-200"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Submit Review
        </button>
      </form>

    </div>
  )
}

export default ProductReview
