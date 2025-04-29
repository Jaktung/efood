import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Footer from "./components/Footer"
import GlobalStyles from "./styles"
import Home from "./pages/Home"
import Header from "./components/Header"
import Perfil from "./pages/Perfil"

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
])

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={rotas} />

      <Footer />
    </>
  )
}

export default App
