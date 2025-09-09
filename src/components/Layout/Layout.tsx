import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div className=" flex flex-col">
      <Header />
      <main className="w-full md:w-4/5 mx-auto px-4 md:px-0 mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout