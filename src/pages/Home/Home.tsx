import BestSellers from "../../components/BestSellers/BestSellers"
import Companies from "../../components/Companies/Companies"
import FeaturedCategories from "../../components/FeaturedCategories/FeaturedCategories"
import HeroSection from "../../components/HeroSection/HeroSection"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Companies/>
      <FeaturedCategories/>
      <BestSellers/>
    </div>
  )
}

export default Home