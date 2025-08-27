// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'

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
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
