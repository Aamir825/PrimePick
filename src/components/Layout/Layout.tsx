import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div>
      <Header />
      <main className=" w-4/5 mx-auto mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout