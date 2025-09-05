"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Button } from "../ui/button"

const products = [
  {
    name: "Wireless Headphones",
    price: 99.99,
    image: "/images/chocbox.png" // Transparent black headphones 
  },
  {
    name: "Smart Watch",
    price: 149.99,
    image: "/images/watch.png" // Smartwatch on transparent background 
  },
  {
    name: "Gaming Laptop",
    price: 1299.99,
    image: "/images/backpack.png" // Gaming laptop PNG results (transparent options available) :contentReference[oaicite:3]{index=3}
  },
  {
    name: "Running Shoes",
    price: 79.99,
    image: "/images/tshirt.png" // Running shoes PNG with transparent background :contentReference[oaicite:4]{index=4}
  },
  {
    name: "Camera Lens",
    price: 249.99,
    image: "/images/handbag.png" // Camera lens PNG options (transparent backgrounds) :contentReference[oaicite:5]{index=5}
  },
  {
    name: "Leather Backpack",
    price: 59.99,
    image: "/images/headphone.png" // High-quality backpack PNG with transparent background :contentReference[oaicite:6]{index=6}
  },
];


const BestSellers = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AB8C95] via-[#000000] to-[#8E97C5]">
          Our Best Sellers
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Popular picks loved by our customers. Grab yours today!
        </p>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="">
          {products.map((product, i) => (
            <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/5 sm:basis-1/3">
              <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200 bg-gradient-to-br from-[#041107] via-[#0e5718] to-[#031406]">
                {/* Product Card */}
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-full mb-3 bg-white backdrop-blur-md shadow-md shadow-[#00fc3b]"
                  />
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <p className="text-[#ff8f0e] font-bold mt-1">${product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#0e5718] shadow-sm hover:bg-[#076614] cursor-pointer text-white">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  )
}

export default BestSellers