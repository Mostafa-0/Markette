import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import Home from "./components/home";
import Cart from "./components/cart";
import ProductDetails from "./components/productDetails";
import Footer from "./components/footer";
import { CartContextProvider } from "./context/CartContext";
import { ProductContextProvider } from "./context/productContext";
import NotFound from "./components/notFound";
import Products from "./components/products";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.style.scrollBehavior = "smooth";
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
