import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { CartContextProvider } from "./context/CartContext";
import Home from "./components/home";
import Cart from "./components/cart";
import ProductDetails from "./components/productDetails";
import Footer from "./components/footer";
import { ProductContextProvider } from "./context/productContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
