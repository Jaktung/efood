import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import GlobalStyles from "./styles"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <GlobalStyles />
        <ProductList />
      </div>
      <Footer />
    </>
  )
}

export default App
