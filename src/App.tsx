// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import About from './pages/About/About'
import Contactus from './pages/Contactus/Contactus'
import Cart from './components/Cart/Cart'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "products",
          element: <Products/>
        },
        {
          path: "products/:id",
          element: <ProductDetail/>
        },
        {
          path: "contact",
          element: <Contactus/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "cart",
          element: <Cart/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
