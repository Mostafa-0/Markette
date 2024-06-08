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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
