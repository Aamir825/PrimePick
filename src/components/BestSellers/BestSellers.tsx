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
    image: "https://similarpng.com/black-wireless-headphones-isolated-on-transparent-background-png/" // Transparent black headphones 
  },
  {
    name: "Smart Watch",
    price: 149.99,
    image: "https://www.rawpixel.com/image/9766418/smartwatch-screen-png-transparent-background" // Smartwatch on transparent background 
  },
  {
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://www.pngegg.com/en/search?q=gaming+Laptop" // Gaming laptop PNG results (transparent options available) :contentReference[oaicite:3]{index=3}
  },
  {
    name: "Running Shoes",
    price: 79.99,
    image: "https://www.freeiconspng.com/img/Running-Shoes-Png-Image-PNG-images" // Running shoes PNG with transparent background :contentReference[oaicite:4]{index=4}
  },
  {
    name: "Camera Lens",
    price: 249.99,
    image: "https://pngtree.com/so/camera-lens" // Camera lens PNG options (transparent backgrounds) :contentReference[oaicite:5]{index=5}
  },
  {
    name: "Leather Backpack",
    price: 59.99,
    image: "https://www.freeiconspng.com/img/21159" // High-quality backpack PNG with transparent background :contentReference[oaicite:6]{index=6}
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

      <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-7xl mx-auto">
        <CarouselContent className="flex gap-4">
          {products.map((product, i) => (
            <CarouselItem key={i} className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4">
              <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200 bg-gradient-to-br from-[#041107] via-[#0e5718] to-[#031406]">
                {/* Product Card */}
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-[#0e5718] font-bold mt-1">${product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-br from-[#041107] via-[#0e5718] to-[#031406] text-white">
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