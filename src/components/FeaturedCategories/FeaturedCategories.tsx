import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import { Card, CardContent } from "../ui/card"

const categories = [
  { name: "Electronics", image: "https://cdn.pixabay.com/photo/2017/08/02/20/42/black-and-white-2573314_1280.jpg" },
  { name: "Fashion", image: "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg" },
  { name: "Home & Living", image: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg" },
  { name: "Beauty", image: "https://cdn.pixabay.com/photo/2018/01/14/00/05/makeup-3081015_1280.jpg" },
  { name: "Sports", image: "https://cdn.pixabay.com/photo/2021/06/04/06/54/racket-6308994_1280.jpg" },
  { name: "Toys", image: "https://cdn.pixabay.com/photo/2015/08/14/19/41/minion-888797_1280.jpg" },
]

const FeaturedCategories = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AB8C95] via-[#000000] to-[#8E97C5]">
          Shop by Category
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Discover our wide range of products tailored to your needs.
        </p>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/4 lg:basis-1/5 sm:basis-1/3"
            >
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200">
                <CardContent className="flex flex-col items-center justify-center px-4 py-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h3 className="text-sm font-medium text-gray-700">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </section>
  )
}

export default FeaturedCategories
