"use client"

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { Card } from "../ui/card"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    rating: 5,
    review: "Amazing products and super fast delivery! I highly recommend this store to everyone.",
    avatar: "/images/profile.jpg",
  },
  {
    name: "David Lee",
    role: "Professional Photographer",
    rating: 4,
    review: "The product quality is top-notch. Customer service is friendly and responsive.",
    avatar: "/images/profiles.jpg",
  },
  {
    name: "Emma Williams",
    role: "Fitness Coach",
    rating: 5,
    review: "I love the variety of products available. Everything I ordered came perfectly packaged.",
    avatar: "/images/profile.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    rating: 5,
    review: "Amazing products and super fast delivery! I highly recommend this store to everyone.",
    avatar: "/images/profiles.jpg",
  },
  {
    name: "David Lee",
    role: "Professional Photographer",
    rating: 4,
    review: "The product quality is top-notch. Customer service is friendly and responsive.",
    avatar: "/images/profile.jpg",
  },
  {
    name: "Emma Williams",
    role: "Fitness Coach",
    rating: 5,
    review: "I love the variety of products available. Everything I ordered came perfectly packaged.",
    avatar: "/images/profiles.jpg",
  },
]

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 rounded-2xl mb-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AB8C95] via-[#000000] to-[#8E97C5]">
          What Our Customers Say
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto mt-2">
          Hear from real people who love our products
        </p>
      </div>

      <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-6xl mx-auto">
        <CarouselContent className="flex gap-1 pb-1">
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="basis-1/1 sm:basis-1/2 md:basis-1/3">
              <Card className="bg-white shadow-sm border border-white/20 rounded-xl p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    <p className="text-xs text-gray-500">{t.role}</p>
                    <div className="flex mt-1 text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-800 flex-1 flex items-center">
                  <FaQuoteLeft className="mr-2 text-gray-400" />
                  {t.review}
                </p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Testimonials
