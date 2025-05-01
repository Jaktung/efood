import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Footer from "./components/Footer"
import GlobalStyles from "./styles"
import Home from "./pages/Home"
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

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />

      <Footer />
    </BrowserRouter>
  )
}

export default App
