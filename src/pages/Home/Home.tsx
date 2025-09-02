import BestSellers from "../../components/BestSellers/BestSellers"
import Companies from "../../components/Companies/Companies"
import FeaturedCategories from "../../components/FeaturedCategories/FeaturedCategories"
import HeroSection from "../../components/HeroSection/HeroSection"
import Testimonials from "../../components/Testimonials/Testimonials"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Companies/>
      <FeaturedCategories/>
      <BestSellers/>
      <Testimonials/>
    </div>
  )
}

export default Home