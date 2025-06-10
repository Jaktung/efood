import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Footer from "./components/Footer";
import Rotas from "./routes";

import { store } from "./store";

import GlobalStyles from "./styles";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
