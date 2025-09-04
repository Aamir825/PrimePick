import ProductCard from "../../components/ProductCard/ProductCard"
import ProductLeftFilters from "../../components/ProductLeftFilters/ProductLeftFilters"
import ProductTopFilters from "../../components/ProductTopFilters/ProductTopFilters"

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    image: "https://cdn.pixabay.com/photo/2017/08/02/20/42/black-and-white-2573314_1280.jpg",
    price: 99,
    oldPrice: 129
  },
  {
    id: "2",
    name: "Smart Watch",
    image: "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg",
    price: 149,
    oldPrice: 179
  },
  {
    id: "1",
    name: "Wireless Headphones",
    image: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
    price: 99,
    oldPrice: 129
  },
  {
    id: "2",
    name: "Smart Watch",
    image: "https://cdn.pixabay.com/photo/2018/01/14/00/05/makeup-3081015_1280.jpg",
    price: 149,
    oldPrice: 179
  },
  {
    id: "1",
    name: "Wireless Headphones",
    image: "https://cdn.pixabay.com/photo/2021/06/04/06/54/racket-6308994_1280.jpg",
    price: 99,
    oldPrice: 129
  },
  {
    id: "2",
    name: "Smart Watch",
    image: "https://cdn.pixabay.com/photo/2015/08/14/19/41/minion-888797_1280.jpg",
    price: 149,
    oldPrice: 179
  }
]
const handleAddToCart = (id: string) => {
  console.log(`Product ${id} added to cart`)
}

const Products = () => {
  return (
    <div className="flex items-start gap-6 py-10">
      {/* Left Filters - will stretch height */}
      <div className="w-64 flex-shrink-0 self-stretch">
        <ProductLeftFilters />
      </div>

      {/* Right Products Grid */}    
      <div className=" w-full">  
        <ProductTopFilters/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Products